
function NavBar(props) {
    return (
        <nav className="navbar  fixed-top navbar-expand-lg navbar-dark bg-dark">
            <a className="ms-3 navbar-brand" href="#">UI Project</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    {
                        props.navLinks.map((navLink) => {
                            return (
                                <li className="nav-item" key={navLink.text}>
                                    <a className="nav-link" href={navLink.url}> {navLink.text}</a>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;