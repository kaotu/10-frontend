import react from 'react'
import styled from 'styled-components'
import Router from 'next/router'
import Burger from './Burger'
import GameBut from './GameBut'

const LinkItem = styled.button`
color: #fff;
font-size : 1.4em;
width:8vw;
background-color:#154051;
border: 0vw;
  cursor:pointer;
  transition:all 250ms ease-in-out;
  &:hover{
    color: #fff;
    text-decoration: none;
    transition:scale(1.1);
    background-color: rgba(0, 0, 0, 0.3);
    border: 2vw;
    border-radius: 12px;
    width:8vw;
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
  ${props => props.primaryNav && `
  background-color:#24372f; 
  `}   
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

const nav = [
  { to: 'home', text: "Home" },
  { to: 'what', text: "What" },
  { to: 'who', text: "Who" },
  { to: 'where', text: "Where" },
  { to: 'when', text: "When" },
  { to: 'faqs', text: "FAQs" },
  { to: 'contact', text: "Contact" }]

const navLink = (id) => {
  Router.push(`/#${id}`)
}

const Navbar = () => (
  <NavItem className="sticky-top">
    <Burger />
    <div>
      <div className="navbar navbar-expand-lg">
        <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
          <div className="navbar-nav  justify-content-center ">
            {nav.map((nav, i) => (
              <LinkItem key={i} onClick={() => navLink(nav.to)} className="nav-item nav-link text-center"  >{nav.text}</LinkItem>
            ))}
          </div>
        </div>
        <a href='https://itim.wip.camp' target="_blank">
          <RegisterBtn src='/static/image/regisred.png' />
        </a>
      </div>
      <GameBut />
    </div>
  </NavItem>
)

export default Navbar
