//Import mongoose
const mongoose = require("mongoose");

//Create schema 
const PostSchema = new mongoose.Schema({
    author: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    description: { type: String, required: true },
    postedDate: { type: Date },
    lastEditedDate: { type: Date }
});

//Create model
const Post = mongoose.model("Post", PostSchema);

//CRUD functions
//Create
async function create(authorId, postText) {
    const newPost = await Post.create({
        author: authorId,
        description: postText,
        postedDate: new Date()
    });
    return newPost;
}

//Read
async function get(postId) {
    const post = await Post.findById(postId);
    if (!post) {
        return null;
    }
    return { ...post._doc, __v: undefined };
}

//Update
async function updatePost(postId, postText) {
    const post = await Post.findById(postId);
    console.log(post);
    if (!post) {
        throw Error("Sorry, I can't find the post 😔");
    }
    const updatedPost = await Post.findByIdAndUpdate(postId, {
        $set: {
            description: postText,
            lastEditedDate: new Date()
        }
    });
    return { ...updatedPost._doc, __v: undefined };
}

//Delete
async function deletePost(id) {
    await Post.deleteOne({ "_id": id });
}

//Other common operations
async function getByAuthor(authorId) {
    return await Post.find({ "author": authorId }).sort({ postedDate: -1 });
}

//Export public methods
module.exports = {
    create, get, updatePost, deletePost, getByAuthor
}