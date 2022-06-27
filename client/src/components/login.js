function LoginForm() {
    return (
        <div id="loginForm" className="container h-100 d-flex justify-content-center align-items-center">
            <div className="container w-50">
                <div >
                    <h5 className="pt-4">Login</h5>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="password" className="form-control" placeholder="Password" aria-label="password" aria-describedby="basic-addon2" />
                    </div>
                    <button type="submit" className="w-100 btn btn-dark">Login</button>
                </div>
                <p className="m-r-auto pt-4"> Not registered yet? <a href="#registerForm" className="link-secondary">Register now!</a></p>
            </div>
        </div>);
}

export default LoginForm;