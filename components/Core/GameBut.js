import react from 'react'
import styled from 'styled-components'
import {compose ,lifecycle,withState} from 'recompose'

const GameButton = styled.div`
  width: 100px;
  height: 100px;
  border: .2em solid #fff;
  border-top : transparent;    
  border-bottom-right-radius: 100px;
  border-bottom-left-radius: 100px;
  background-color: ${props => props.color || ''};
  transition:all 550ms ease-in-out;
  cursor: pointer;
  position: absolute;
  left: 5vw;
  top:101%;          
  color: white;
  z-index: 2560;
  @media(max-width:1200px) {
    display:none;   
  }
  &:hover{
    height:120px;
  }
`
const Font = styled.h1`
  transition:all 550ms ease-in-out;
  position: absolute;
  font-size: 1.4em;
  font-weight: bold;
  top: 10%;
  left:10%;
  width: 80%;
  color: #fff;
  letter-spacing: 5px;
`

const IconGame = styled.img`
  transition:all 550ms ease-in-out;
  position: absolute;
  width: 40%; 
  left: 30%;
  top:40%;
  
`
const DivGame = styled.div`
  position relative;
  height:100px;
  transition:all 550ms ease-in-out;
  &:hover{
    height:120px;
    margin-top:10px;
  }
`


const GameBut = props => (
  <a href="https://game.wip.camp" target="_blank">
  <GameButton color={props.bgColor.nav} className="justify-content-center align-items-center" data-toggle="" data-target="#">
      <DivGame><Font>GAME</Font><IconGame src="/static/image/icongame-monkey.png"/></DivGame>
  </GameButton>
  </a>
)

export default compose(
  withState('bgColor','setBgColor',''),
  lifecycle({
    componentDidMount() {
      let theme = window.localStorage.getItem("color")
      const themeColor = JSON.parse(theme)
      this.props.setBgColor(themeColor)
    }
  })
)(GameBut)
