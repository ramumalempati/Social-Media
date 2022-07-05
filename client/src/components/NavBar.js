import { Outlet, Link } from "react-router-dom";
function NavBar(props) {
    return (
        <div className="h-100">
            <nav className="navbar  fixed-top navbar-expand-lg navbar-dark bg-dark">
                <Link className="ms-3 navbar-brand" to="/">UI Project</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {
                            props.navLinks.map((navLink) => {
                                return (
                                    <li className="nav-item" key={navLink.text}>
                                        <Link className="nav-link" to={navLink.url}> {navLink.text}</Link>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
            </nav>
            <Outlet />
        </div>
    );
}

export default NavBar;