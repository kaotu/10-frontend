import react from 'react'
import styled from 'styled-components'

const GameButton = styled.div`
  position: relative;
  width: 100px;
  height: 100px;    
  border-bottom-right-radius: 100px;
  border-bottom-left-radius: 100px;
  background-color: #0A3A4E;
  transition:all 550ms ease-in-out;
  cursor: pointer;
  position: absolute;
  left: 5vw;
  top:65px;          
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
const Font = styled.h1`
  position: absolute;
  font-size: 1.4em;
  font-weight: bold;
  top: 10%;
  left:11%;
  width: 80%;
  color: #fff;
  letter-spacing: 5px;
  @media(max-width:1200px) {
    font-size: 0em;            
  }
`

const IconGame = styled.img`
  width: 40%; 
  left: 30%;
  top:40%;
  position: absolute;
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
  <a href="https://game.wip.camp" target="_blank">
  <GameButton className="justify-content-center align-items-center" data-toggle="" data-target="#">
       <Font>GAME</Font><IconGame src="/static/image/icongame-monkey.png"/>
  </GameButton>
  </a>
)

export default GameBut
