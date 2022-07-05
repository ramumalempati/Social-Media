import { fetchData } from "../main.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function LoginForm() {
    const nav = useNavigate();

    const [user, setUser] = useState({
        userName: '',
        password: ''
    })

    const { userName, password } = user;

    const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value })

    const onSubmit = (e) => {
        e.preventDefault();

        fetchData(
            "/user/login",
            {
                userName,
                password
            },
            "POST")
            .then((data) => {
                if (!data.message) {
                    console.log(data)
                    localStorage.setItem('currentLoggedInUserId', data._id);
                    nav("/profile")
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div id="loginForm" className="container h-100 d-flex justify-content-center align-items-center">
            <div className="container w-50">
                <div >
                    <form onSubmit={onSubmit}>
                        <h5 className="pt-4">Login</h5>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Username" aria-label="Username" id="username" name='userName' onChange={onChange} value={userName} required aria-describedby="basic-addon1" />
                        </div>
                        <div className="input-group mb-3">
                            <input type="password" className="form-control" placeholder="Password" aria-label="password" name='password' onChange={onChange} value={password} required aria-describedby="basic-addon2" />
                        </div>
                        <input type="submit" className="w-100 btn btn-dark" value="Login" />
                    </form>
                </div>
                <p className="m-r-auto pt-4"> Not registered yet? <Link to="/register" className="link-secondary">Register now!</Link></p>
            </div>
        </div>);
}

export default LoginForm;