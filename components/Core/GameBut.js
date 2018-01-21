import react from 'react'
import styled from 'styled-components'

const GameButton = styled.div`
  width: 180px;
  height: 60px;    
  border-radius: 10%;
  background-color: red;
  transition:all 550ms ease-in-out;
  cursor: pointer;
  position:fixed;
  right:-65px;
  top:200px;          
  z-index: 1;
  color: white;
  letter-spacing: 5px;
  -webkit-transform:rotate(270deg);

  @media(max-width:720px) {
    width: 65px;            
    height: 65px;            
  }
`

const Game = styled.span`
  font-size: 1.5em;
  font-weight: bold;  

  @media(max-width:720px) {
    font-size: 1em;            
  }
`
const IconGame = styled.img`
  width: 20%;
  position: relative;
  buttom: 10px;
  left: 5%;
  -webkit-transform:rotate(90deg);
`

const GameBut = () => (
  <GameButton className="d-flex justify-content-center align-items-center" data-toggle="" data-target="#">
    <Game className="text-center">GAME</Game><IconGame src="/static/image/icongame-monkey.png"/>
  </GameButton>
)
export default GameBut