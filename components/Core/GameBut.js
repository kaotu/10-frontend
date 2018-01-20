import react from 'react'
import styled from 'styled-components'
import '../global-style'

const GameButton = styled.div`
  width: 130px;
  height: 60px;    
  border-radius: 10%;
  background-color: red;
  transition:all 550ms ease-in-out;
  cursor: pointer;
  position:fixed;
  right:-40px;
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

const GameBut = () => (
  <GameButton className="d-flex justify-content-center align-items-center" data-toggle="" data-target="#">
    <Game className="text-center">GAME</Game>
  </GameButton>
)
export default GameBut