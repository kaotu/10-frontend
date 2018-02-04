import react from 'react'
import styled from 'styled-components'
import Router from 'next/router'
import Burger from './Burger'
import GameBut from './GameBut'
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const NavItem = styled.nav`
  color: #ffff;
  background-color:${props => props.color || ''};
  border-bottom:.2em  solid #fff;
  transition: all .02s ease-in-out;
  top: ${props => props.onScrollDown ? '-170px':'0px'};

  ${props => props.primaryNav && `
  background-color:#24372f; 
  `}   
  `
const Regis = styled.button`
position:relative;
width: 8vw;
display:inline-block;
color:#ecf0f1;
font-size:1.4em;
text-decoration:none;
border-radius:5px;
border:solid 1px #e53c35;
background:#e53c35;
text-align:center;
padding:.5em;
transition: all 0.1s;
margin-bottom:5%;
box-shadow: 0px 6px 0px #871612;
cursor:pointer;
&:hover{
  box-shadow: 0px 2px 0px #871612;
    position:relative;
    top:4px;

}

`

const NavLink = styled(Link)`
  color: #fff;
  font-size : 1.4em;
  width:8vw;
  background-color:${props => props.color || ''};
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
    // background-color: rgba(0, 0, 0, 0.3) !important;
    color: #fff;
    border-radius: 12px; 
    outline: none;
  }
`;

const nav = [
  { to: 'home', text: "Home"},
  { to: 'what', text: "What"},
  { to: 'who', text: "Who"},
  { to: 'where', text: "Where"},
  { to: 'when', text: "When"},
  { to: 'faqs', text: "FAQs"},
  { to: 'contact', text: "Contact"}]

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      direction: '',
      current: 'home',
      show: false,
      lastScrollPos: 0,
      color: ''
    };
  }

  componentDidMount() {
  
    window.addEventListener("scroll", this.onScroll.bind(this), true);
    let color = JSON.parse(window.localStorage.getItem('color'))
    this.setState({
      color
    })
    scrollSpy.update();
  }  
  onScroll(event) {
    console.log(navigator.userAgent)
    if(!/Android|webOS|iPhone|iPad|iPod|Mozilla|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      if(this.state.lastScrollPos > window.pageYOffset) {
        this.setState({
          direction:'up',
          lastScrollPos:window.pageYOffset
        });
      } else if(this.state.lastScrollPos < window.pageYOffset) {
        this.setState({
          direction:'down',
          lastScrollPos:window.pageYOffset
        });
      }
     }
    
  }
  render() {
    return (
      <NavItem color={this.state.color.nav} className="sticky-top" onScrollDown={this.state.direction=='down'}>
        <Burger />
        <div>
          <div className="navbar navbar-expand-lg">
            <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
              <nav id="navbar-desktop" className="nav nav-pills navbar-nav  justify-content-center ">
                {nav.map((nav, i) => (
                  <NavLink
                    color={this.state.color.nav}
                    spy={true}
                    key={i}
                    to={nav.to}
                    smooth={true}
                    className="nav-item nav-link text-center"
                  >
                    {nav.text}
                  </NavLink>
                ))}
              </nav>
            </div>
            <a href='https://itim.wip.camp' target="_blank">
              <Regis>สมัครเลย</Regis>
            </a>
          </div>
          <GameBut />
        </div>
      </NavItem>
    );
  }
}

export default Navbar;

