import react from 'react'
import { slide as Menu } from 'react-burger-menu'
import styled from 'styled-components'
import Router from 'next/router'
import {compose,lifecycle,withState} from 'recompose'
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Item = styled.button`
  
  color: #fff;
  padding: 0.8em;
  transition: .5s;
  border: 0vw;
  width:100%;
  background-color:${props => props.burger || ''};
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
const styles = {
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
    background: '',
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
        <Menu 
          onClick={this.onClick}
          isOpen={this.state.menuOpen}
          className="d-lg-none fixed-top" styles={styles} pageWrapId={'page-wrap'} outerContainerId={'outer-container'} >
          <BlankSpace  className="page-wrap"/>
          {nav.map((nav, i) => (
              <Item burger={this.props.check.nav}  key={i} onClick={()=>this.onClick(nav.to)} className="menu-item "><Link smooth={true} to={nav.to}>{nav.text}</Link></Item>
            ))}
          
        </Menu>
      </div>
     )
   }
} 

export default compose(
  withState('check','setCheck',''),
  lifecycle({
    componentDidMount() {
      let theme = JSON.parse(window.localStorage.getItem("color"))
      this.props.setCheck(theme)
    }
  })
)(BurgerMenu)