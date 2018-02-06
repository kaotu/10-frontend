import react from 'react'
import { slide as Menu } from 'react-burger-menu'
import styled from 'styled-components'
import Router from 'next/router'

const CustomMenu = styled(Menu)`
  // display: ${props => props.show ? 'block' : 'none'};
  // display: block};
  // left: ${props => props.show ? '-200px':''};
`

const Item = styled.button`
  
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
    font-weight: bold;  
    text-decoration:none;
    background-color:rgba(0, 0, 0, 0.3);
    border: 0vw;
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
    background: '#fff',
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
    fontSize: '1.5em',
    width:'200px'
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
  state = {
    menuOpen: false
  }

  onClick = to => {
    this.setState({
      menuOpen: false
    })
    burgerLink(to) 
  }

  handleStateChange = (state) => console.log(state)

  render() {
    return (
      <div className="d-lg-none sticky text-center">   
        <CustomMenu
          onClick={this.onClick}
          isOpen={this.state.menuOpen}
          className="d-lg-none fixed-top" styles={styles} pageWrapId={'page-wrap'} outerContainerId={'outer-container'} >
          <BlankSpace  className="page-wrap"/>
          {nav.map((nav, i) => (
              <Item smooth={true} key={i} onClick={()=>this.onClick(nav.to)} className="menu-item ">{nav.text}</Item>
            ))}
          
        </CustomMenu>
      </div>
     )
   }
} 

export default BurgerMenu