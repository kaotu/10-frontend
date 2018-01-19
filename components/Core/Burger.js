import react from 'react'
 import { slide as Menu } from 'react-burger-menu'
import styled from 'styled-components'

const Item = styled.a`
  color: #b8b7ad;
  padding: 0.8em;
  &:hover{
      color: #c94e50;
  }
  &:focus {
    color: #c94e50;
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
    background: '#373a47',
    padding: '0em',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
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
          <Item className="menu-item" href="#">หน้าแรก</Item>
          <Item className="menu-item" href="#">ค่ายของเรา</Item>
          <Item className="menu-item" href="#">เหมาะกับใคร</Item>
          <Item className="menu-item" href="#">สิ่งที่จะได้เรียนรู้</Item>
          <Item className="menu-item" href="#">เวลาและสถานที่</Item>
          <Item className="menu-item" href="#">คำถามที่พบบ่อย</Item>
          <Item className="menu-item" href="#">ติดต่อสอบถาม</Item>
         </Menu>
      </div>
     )
   }
} 

export default BurgerMenu