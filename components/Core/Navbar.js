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
    <div className="sticky-top">
        <nav class="navbar navbar-expand-lg navbar-light ">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                <div class="navbar-nav  justify-content-center ">
                    <LinkItem class="nav-item nav-link " href="#">Home</LinkItem>
                    <LinkItem class="nav-item nav-link " href="#">What</LinkItem>
                    <LinkItem class="nav-item nav-link" href="#">Who</LinkItem>
                    <LinkItem class="nav-item nav-link" href="#">When</LinkItem>
                    <LinkItem class="nav-item nav-link " href="#">Where</LinkItem>
                    <LinkItem class="nav-item nav-link " href="#">FAQs</LinkItem>
                    <LinkItem class="nav-item nav-link " href="#">Contact</LinkItem>
                </div>
            </div>
        </nav>
    </div>
)

export default Navbar