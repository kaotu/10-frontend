import react from 'react'

const NavOurCamp = () => (
    <nav className="navbar navbar-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#NAVBAR" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="NAVBAR">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Features</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Pricing</a>
                </li>
            </ul>            
        </div>
    </nav>
)

export default NavOurCamp