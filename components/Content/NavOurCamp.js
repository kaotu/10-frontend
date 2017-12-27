import react from 'react'

const NavOurCamp = () => (
    <nav className="navbar navbar-expand-lg navbar-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <a className="nav-item nav-link" href="#">Home</a>
                <a className="nav-item nav-link" href="#">Features</a>
                <a className="nav-item nav-link" href="#">Pricing</a>
                <a className="nav-item nav-link" href="#">Disabled</a>
            </div>
        </div>
    </nav>
)

export default NavOurCamp