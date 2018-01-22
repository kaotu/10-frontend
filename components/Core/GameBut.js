import react from 'react'
import styled from 'styled-components'

const GameButton = styled.div`
  width: 18%;
  height: 30%;    
  border-radius: 10%;
  background-color: #e53c35;
  transition:all 550ms ease-in-out;
  cursor: pointer;
  position:fixed;
  right:-13%;
  top:35%;          
  z-index: 1;
  color: white;
  letter-spacing: 5px;
  padding: 0px;
  @media(max-width:720px) {
    width: 10%;            
    height: 10%;   
    right:-3%;         
  }
`

const Game = styled.div`
  font-size: 1.4em;
  font-weight: bold;  
  -webkit-transform:rotate(270deg);
  position: relative;
  right: 35%;
  @media(max-width:720px) {
    font-size: 0em;  
    right: 10%;           
  }
`
const IconGame = styled.img`
  width: 15%; 
  -webkit-transform:rotate(90deg);
  @media(max-width:720px) {
    width: 50%;          
  }
`


const GameBut = () => (
  <GameButton className="d-flex justify-content-center align-items-center" data-toggle="" data-target="#">
    <div><Game className="text-center">GAME<IconGame src="/static/image/icongame-monkey.png"/></Game></div>
  </GameButton>
)
export default GameBut