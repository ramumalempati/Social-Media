import { fetchData } from "../main.js";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Moment from 'moment';

function Profile() {
    const nav = useNavigate();

    const [newPost, setNewPost] = useState('');
    const onChange = (e) => setNewPost(e.target.value);

    const loggedInUserId = localStorage.getItem('currentLoggedInUserId');

    const [posts, setPosts] = useState([]);
    function fetchPosts() {
        fetchData(
            "/post/getByAuthor",
            {
                "authorId": loggedInUserId
            },
            "POST")
            .then((data) => {
                if (!data.message) {
                    setPosts(data);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }
    useEffect(() => {
        if (loggedInUserId) {
            fetchPosts();
        }
        else {
            nav('/login');
        }
    }, [])

    function createPost() {
        if (newPost && newPost != '') {
            fetchData(
                "/post/create",
                {
                    authorId: loggedInUserId,
                    postText: newPost
                },
                "POST")
                .then((data) => {
                    setNewPost('');
                    fetchPosts();
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }
    function deletePost(postId) {
        console.log(postId);
        fetchData(
            "/post/delete",
            {
                postId: postId,
            },
            "DELETE")
            .then((data) => {
                fetchPosts();
            })
            .catch((error) => {
                console.log(error)
            })
    }
    return (
        <div id="profile" className="container h-100 d-flex justify-content-center">
            <div className="container w-50 mt-80">
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Whats on your mind?" aria-label="Whats on your mind?" id="newPost" name='newPost' onChange={onChange} value={newPost} aria-describedby="button-addon2" />
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={createPost}>Post</button>
                </div>
                {
                    posts.map((post) => {
                        return (
                            <div className="card mb-3" key={post._id}>
                                <i className="bi bi-trash"></i>
                                <blockquote className="blockquote mb-0">
                                    <p>{post.description}</p>
                                    <p className="card-text"><small className="text-muted">{Moment(post.postedDate).format("MMM Do YYYY, h:mm a")}</small></p>
                                </blockquote>
                                <button type="button" onClick={() => deletePost(post._id)} className="btn btn-danger">Delete</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>);
}

export default Profile;