import react from 'react'
import styled from 'styled-components'
import Burger from './Burger'


const LinkItem = styled.a`
  color: #fff;
  margin-rigth:2vw;
  margin-left:2vw;
  &:hover{
    color: #fff;
    text-decoration: none;
    background-color: rgba(0, 0, 0, 0.3);
    border: 2vw;
    padding-rigth:2vw;
    padding-left:2vw;
    border-radius: 12px;
  }
  &:focus{
    background-color: rgba(0, 0, 0, 0.3);
    color: #fff;
    border-radius: 12px; 
  }
`
const NavItem = styled.nav`
  color: #fff;
  background-color:#154051;
    
`
const RegisterBtn = styled.img`
  height: 250%;
  position:absolute;
  top: 0%;
  right: 2%;
  z-index:2;
  cursor:pointer;
  transition:all 550ms ease-in-out;
  
  @media(max-width:720px) {            
    height:150%;           
  }
`

const Navbar = () => (
  <NavItem className="sticky-top">
    <Burger />
    <div>
      <div className="navbar navbar-expand-lg">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
          <div className="navbar-nav  justify-content-center ">
            <LinkItem className="nav-item nav-link " href="#home"> HOME </LinkItem>
            <LinkItem className="nav-item nav-link " href="#what">WHAT</LinkItem>
            <LinkItem className="nav-item nav-link" href="#who">WHO</LinkItem>
            <LinkItem className="nav-item nav-link" href="#where">WHERE</LinkItem>
            <LinkItem className="nav-item nav-link " href="#when">WHEN</LinkItem>
            <LinkItem className="nav-item nav-link " href="#faqs">FAQs</LinkItem>
            <LinkItem className="nav-item nav-link " href="#contact">CONTACT</LinkItem>
          </div>
        </div>

        <RegisterBtn src='../../static/image/regisred.svg' />
      </div>
    </div>
  </NavItem>
)

export default Navbar