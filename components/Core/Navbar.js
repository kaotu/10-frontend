import react from 'react'
import styled from 'styled-components'


const LinkItem = styled.a`
color: #FFFFFF;
padding: 1vw 2vw;
&:hover{
    color: #000000;
    text-decoration: none;
    background-color: #B0E0E6;
    border: none;
    color: white;
    padding: 1vw 2vw;
}
`
const Navbar = () => (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light ">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                <div class="navbar-nav  justify-content-center ">
                    <LinkItem className="nav-item nav-link " href="#">Home</LinkItem>
                    <LinkItem className="nav-item nav-link " href="#">What</LinkItem>
                    <LinkItem className="nav-item nav-link" href="#">Who</LinkItem>
                    <LinkItem className="nav-item nav-link" href="#">When</LinkItem>
                    <LinkItem className="nav-item nav-link " href="#">Where</LinkItem>
                    <LinkItem className="nav-item nav-link " href="#">FAQs</LinkItem>
                    <LinkItem className="nav-item nav-link " href="#">Contact</LinkItem>
                </div>
            </div>
        </nav>
    </div>
)

export default Navbar