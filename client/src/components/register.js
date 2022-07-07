import { fetchData } from "../main.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../context/userContext.js";

function RegisterForm() {
    const nav = useNavigate();

    const {user, updateUser} = useContext(UserContext);

    const { userName, password, confirmPassword } = user;

    const onChange = (e) => updateUser(e.target.name, e.target.value)

    const onSubmit = (e) => {
        e.preventDefault();

        fetchData(
            "/user/register",
            {
                userName,
                password
            },
            "POST")
            .then((data) => {
                if (!data.message) {
                    updateUser("authenticated", true)
                    localStorage.setItem('currentLoggedInUserId', data._id);
                    nav("/profile")
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div id="registerForm" className="container h-100 d-flex justify-content-center align-items-center">
            <div className="container w-50">
                <div >
                    <form onSubmit={onSubmit}>
                        <h5 className="pt-4">Register</h5>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Username" aria-label="Username" id="username" name='userName' onChange={onChange} value={userName} required aria-describedby="basic-addon1" />
                        </div>
                        <div className="input-group mb-3">
                            <input type="password" className="form-control" placeholder="Password" aria-label="password" id="password" name='password' onChange={onChange} value={password} required aria-describedby="basic-addon2" />
                        </div>
                        <div className="input-group mb-3">
                            <input type="password" className="form-control" placeholder="Confirm password" aria-label="password" name='confirmPassword' onChange={onChange} value={confirmPassword} required aria-describedby="basic-addon2" />
                        </div>
                        <input type="submit" className="w-100 btn btn-dark" value="Register" />
                    </form>
                </div>
                <p className="m-r-auto pt-4"> Already registered? <Link to="/login" className="link-secondary">Login!</Link></p>
            </div>
        </div>);
}

export default RegisterForm;