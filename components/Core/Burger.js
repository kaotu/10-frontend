import react from 'react'
import { slide as Menu } from 'react-burger-menu'
import styled from 'styled-components'

const Item = styled.a`
  color: #fff;
  padding: 0.8em;
  transition: .1s;
  &:hover{
    color: #27BFFF;
    text-decoration:none;
  }
  &:focus {
    color: #27BFFF;
    font-size: 1.5em;
    padding: 0.5em;
    text-decoration:none;
}
`
var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top:'11px'
  },
  bmBurgerBars: {
    background: '#fff'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenu: {
    background: '#002D40',
    padding: '0em',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#fff',
    padding: '0.8em'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}
 
 class BurgerMenu extends React.Component {
   render() {
     return (
      <div className="d-lg-none">      
        <Menu styles={styles} pageWrapId={'page-wrap'} outerContainerId={'outer-container'}>
          <Item className="menu-item" href="#">HOME</Item>
          <Item className="menu-item" href="#">WHAT</Item>
          <Item className="menu-item" href="#">WHO</Item>
          <Item className="menu-item" href="#">WHERE</Item>
          <Item className="menu-item" href="#">WHEN</Item>
          <Item className="menu-item" href="#">FAQS</Item>
          <Item className="menu-item" href="#">CONTACT</Item>
         </Menu>
      </div>
     )
   }
} 

export default BurgerMenu