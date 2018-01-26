import react from 'react'
import styled from 'styled-components'

const GameButton = styled.div`
  width: 60px;
  height: 160px;    
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  background-color: #E23D37;
  transition:all 550ms ease-in-out;
  cursor: pointer;
  position: absolute;
  right: 0;
  top:230px;          
  color: white;
  z-index: 2560;
  
  @media(max-width:1200px) {
    width: 55px;            
    height: 65px;          
  }
  @media(max-width:720px) {
    width: 50px;            
    height: 55px; 
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;         
  }

`
const Rotate = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: 0px;
    margin-left: -38px;
`
const Font = styled.h1`
  position: absolute;
  font-size: 1.4em;
  font-weight: bold;
  color: #fff;
  letter-spacing: 5px;
  -webkit-transform:rotate(270deg);
  @media(max-width:1200px) {
    font-size: 0em;            
  }
`

const IconGame = styled.img`
  width: 50%; 
  position: relative;
  top: -65px;
  left: 23px;
  -webkit-transform:rotate(0deg);
  @media(max-width:1200px) {
    width: 50%; 
    top: -18px;         
  }
  @media(max-width:720px) {
    width: 50%; 
    top: -16px;         
  }
`


const GameBut = () => (
  <GameButton className="justify-content-center align-items-center" data-toggle="" data-target="#">
  <a href="https://game.wip.camp" target="_blank">
       <Rotate><Font>GAME</Font><IconGame src="/static/image/icongame-monkey.png"/></Rotate>
  </a>
  </GameButton>
)

export default GameBut
