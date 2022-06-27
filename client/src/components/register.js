function RegisterForm() {
    return (
        <div id="registerForm" className="container h-100 d-flex justify-content-center align-items-center">
            <div className="container w-50">
                <div >
                    <h5 className="pt-4">Register</h5>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="password" className="form-control" placeholder="Password" aria-label="password" aria-describedby="basic-addon2" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="password" className="form-control" placeholder="Confirm password" aria-label="password" aria-describedby="basic-addon2" />
                    </div>
                    <button type="submit" className="w-100 btn btn-dark">Register</button>
                </div>
                <p className="m-r-auto pt-4"> Already registered? <a href="#loginForm" className="link-secondary">Login!</a></p>
            </div>
        </div>);
}

export default RegisterForm;