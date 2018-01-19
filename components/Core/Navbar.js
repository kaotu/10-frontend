import react from 'react'
import styled from 'styled-components'

import Burger from './Burger'


const LinkItem = styled.a`
color: #FFFFFF;
margin-rigth:2vw;
margin-left:2vw;
&:hover{
    color: #000000;
    text-decoration: none;
    background-color: #B0E0E6;
    border: 2vw;
    padding-rigth:2vw;
    padding-left:2vw;
    border-radius: 12px;
}
`
const NavItem = styled.nav`
    color: #FFFFFF;
    background-color:#240;
    
`
const RegisterBtn = styled.div`
    width: 150px;
    position:absolute;
    background-color:#cd4a20;
    right: 0;
    height: 80px;
    margin-right:1vw;
    background-color: red;
    width: 5em;
    height: 8em;
`
const Navcolor = styled.div`

`

const Navbar = () => (
    <NavItem className="sticky-top">
    <Burger/>
        <div>
            <div className="navbar navbar-expand-lg">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                    <div className="navbar-nav  justify-content-center ">
                        <LinkItem className="nav-item nav-link " href="#"> Home </LinkItem>
                        <LinkItem className="nav-item nav-link " href="#">What</LinkItem>
                        <LinkItem className="nav-item nav-link" href="#">Who</LinkItem>
                        <LinkItem className="nav-item nav-link" href="#">When</LinkItem>
                        <LinkItem className="nav-item nav-link " href="#">Where</LinkItem>
                        <LinkItem className="nav-item nav-link " href="#">FAQs</LinkItem>
                        <LinkItem className="nav-item nav-link " href="#">Contact</LinkItem>
                    </div>
                </div>
                <RegisterBtn/>
                
            </div>
        </div>
    </NavItem>
)

export default Navbar