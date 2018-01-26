import react from 'react'
import { slide as Menu } from 'react-burger-menu'
import styled from 'styled-components'
import Router from 'next/router'

const Item = styled.button`
@media(max-width:720px) {    
  color: #fff;
  padding: 0.8em;
  transition: .5s;
  border: 0vw;
  width:100%;
  background-color:#002D40;
  &:hover{
    color: #fff;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: .3em; 
    text-decoration:none;
    border: 0vw;
  }
  &:focus {
    color: #FFF;
    font-size: 1.5em;
    font-weight: bold;
    padding: 0.5em;
    text-decoration:none;
    background-color:rgba(0, 0, 0, 0.3);
    border: 0vw;
}
}
`

const BlankSpace = styled.a`
  padding: .7em;
`
var styles = {
  bmBurgerButton: {
    position: 'absolute',
    width: '36px',
    height: '30px',
    left: '12px',
    top:'11px'
  },
  bmBurgerBars: {
    background: '#fff'
  },
  bmCrossButton: {
    marginRight: '15em'
  },
  bmCross: {
    background: '#fff',
    height: '4vh',
  },
  bmMenu: {
    background: '#002D40',
    padding: '0em',
    fontSize: '1.75em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#fff',
    padding: '0.3em'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

const burgerLink = (id) => {
  Router.push(`/#${id}`)
}
const nav = [
  {to:'home',text:"Home"},
  {to:'what',text:"What"},
  {to:'who',text:"Who"},
  {to:'where',text:"Where"},
  {to:'when',text:"When"},
  {to:'faqs',text:"FAQs"},
  {to:'contact',text:"Contact"}]
 
 class BurgerMenu extends React.Component {
   render() {
     return (
      <div className="d-lg-none sticky text-center">      
        <Menu className="d-lg-none fixed-top" styles={styles} pageWrapId={'page-wrap'} outerContainerId={'outer-container'}>
          <BlankSpace/>
          {nav.map((nav, i) => (
              <Item key={i} onClick={()=>burgerLink(nav.to)} className="menu-item "  >{nav.text}</Item>
            ))}
          {/* <Item className="menu-item" href="#home">HOME</Item>
          <Item className="menu-item" href="#what">WHAT</Item>
          <Item className="menu-item" href="#who">WHO</Item>
          <Item className="menu-item" href="#where">WHERE</Item>
          <Item className="menu-item" href="#when">WHEN</Item>
          <Item className="menu-item" href="#faqs">FAQs</Item>
          <Item className="menu-item" href="#contact">CONTACT</Item> */}
         </Menu>
      </div>
     )
   }
} 

export default BurgerMenu