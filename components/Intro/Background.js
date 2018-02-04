import react from 'react'
import styled from 'styled-components'
import {compose, withState , lifecycle} from 'recompose'
import Color from '../Core/Color'

const CloudBack = styled.div`
    position:absolute;
    z-index: 0;
    margin:0;
    padding:0;
    top: 30vh;
    left: 0vw;
    height:50vh;
    width:100vw;
    
    background: url('/static/image/CloudBG.svg') repeat 0 0;
    background-position: 20vw 0;
    animation: 100s linear 0s normal none infinite animated;
    background-repeat: repeat-x;
    @keyframes animated {
        from {background-position: 20vw 0;}
        to {background-position: 220vw 0;}
    }
    @media(max-width:720px){
        top:20em;
        width:200%;
    }
`
const CloudBack1 = styled.div`
    position:absolute;
    z-index: 0;
    margin:0;
    padding:0;
    top: 30vh;
    left: 0vw;
    height:50vh;
    width:100vw;
    
    background: url('/static/image/CloudBG.svg') repeat 0 0;
    animation: 80s linear 0s normal none infinite animate;
    background-repeat: repeat-x;
    @keyframes animate {
        from {background-position:0 0;}
        to {background-position: 200vw 0;}
    }
    @media(max-width:720px){
      top:27em;
    }
`
const MountainLeft = styled.img`
    position:absolute;
    z-index: 1;
    left:0vw;
    bottom:-5vh;
    width:100vw;
    @media (max-width:720px) {
      width:200vw;
      z-index: 1;
    }
    // animation: MoveRight 1s linear;
    // animation-delay: 0s;
    // @keyframes MoveRight {
    //     0% {
    //         left: -50vw;
    //     }
    //     100% {
    //         left: -5vw;
    //     }
    // }
`
const MountainCenter = styled.img`
  position:absolute;
  z-index: 2;
  left:18vw;
  bottom:0vh;
  height: 35vw;
  @media (max-width:720px) {
    height:80vw;
    margin-bottom: 0vw;
    left:-20vw;
  }
  @media (max-width:560px) {
    height:100vw;
    margin-bottom: 0vw;
    left:-40vw;
  }
  @media (max-width:420px) {
    height:120vw;
    margin-bottom: 0vw;
    left:-58vw;
  }
  // animation: MoveUp 1s linear;
  // animation-delay: 0s;
  // @keyframes MoveUp {
  //   0% {
  //     bottom: -35vh;
  //   }
  //   100% {
  //     bottom: 0vh;
  //   }
  // }
`
const MountainRight = styled.img`
    position:absolute;
    z-index: 3;
    right:0vw;
    bottom:-15vh;
    width:100vw;
    @media (max-width:720px) {
      width:200vw;
      z-index: 1;
    }
    // animation: MoveLeft 1s linear;
    // animation-delay: 0s;
    // @keyframes MoveLeft {
    //     0% {
    //         right: -50vw;
    //     }
    //     100% {
    //         right: -15vw;
    //     }
    // }
`
const ChooseMonkey = styled.img`
  position: absolute;
  z-index: 4;
  top: 30vh;
  left: 13vw;
  width:3vw;
  animation: MoveUpDown 1s linear infinite;
  cursor:pointer; 
  @keyframes MoveUpDown {
    0% {
      top: 30vh;
    }
    50% {
      top: 28vh;
    }
    100% {
      top: 30vh;
    }
  }
  @media(max-width: 720px){
    margin-top : 50vw;
    left: 23vw;
    width:5vw;
  }
`
const Monkey = styled.img`
  position:absolute;
  z-index: 4;
  bottom:14vh;
  height: 50vh;
  cursor:pointer;
  left:5vw;
  transition:all 550ms ease-in-out;
  width: ${props => props.active ? '50vw': '30vw'};
  @media(max-width: 720px){
    width:45%;
    bottom:1em;
    left:1em;
  }
  @media(max-width: 560px){
    height: 36vh;
  }
  @media(max-width: 420px){
    height: 30vh;
    bottom:12vh;
  }
  &:hover{
    -moz-transform: scale(1.3);
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
  }
  
`
const ChooseGiant = styled.img`
  position: absolute;
  z-index: 4;
  top: 30vh;
  right: 13vw;
  width:3vw;
  animation: MoveUpDown 1s linear infinite;
  cursor:pointer; 
  @media(max-width: 720px){
    margin-top : 50vw;
    right: 23vw;
    width:5vw;
  }
`
const Giant = styled.img`
  position:absolute;
  z-index: 4;
  bottom:8vh;
  height: 60vh;
  cursor:pointer;
  right:5vw;
  transition:all 550ms ease-in-out;
  @media(max-width: 720px){
    width:50%;
    bottom:-2em;
    right:1em;
  }
  @media(max-width: 560px){
    height: 36vh;
  }
  @media(max-width: 420px){
    height: 30vh;
    bottom:10vh;
  }
  &:hover{
    -moz-transform: scale(1.3);
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
  }
`
const CloudBottom = styled.img`
    position:absolute;
    z-index: 5;
    left:0vw;
    bottom:0vh;
    width: 120vw;
    // animation: MoveUp 1s linear;
    // animation-delay: 0s;
    // @keyframes MoveUp {
    //     0% {
    //         bottom: -100vh;
            
    //     }
    //     100% {
    //         bottom: -24vh;
    //     }
    // }
    @media(max-width:720px){
      width:200%;
    }
`
const LogoWip = styled.img`
  width: 50%;
  position: absolute;
  z-index: 6;
  left: 25vw;
  top:3vh;
  animation-name: FadeOut;
  animation-duration: 2s;
  @media(max-width: 720px){
    width: 90%;
    left: 5vw;
    top:6em;
  }
  @keyframes FadeOut {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`
const LogoSIT = styled.img`
  width: 30%;
  position: absolute;
  z-index: 6;
  left: 35vw;
  top:40vh;
  animation-name: FadeOut;
  animation-duration: 2s;
  @media(max-width: 720px){
    width: 90%;
    left: 5vw;
    top:16em;
  }
`
const Scrolldown = styled.img`
    position:absolute;
    z-index: 7;
    width:3vw;
    bottom:5vh;
    left:48vw;
    animation: Dukdik 1s linear infinite;
    cursor:pointer;  
    @keyframes Dukdik {
      0% {
        bottom:5vh;
      }
      50% {
        bottom:7vh;
      }
      100% {
        bottom:5vh;
      }
    }
`

const setTeam = (team) => {
  window.localStorage.setItem('team',team )
  window.location.reload()
}
const Background = (props) => (
    <div>
        <CloudBack/>
        <CloudBack1/>
        <MountainLeft src='/static/image/MountainLeft.svg'/>
        <MountainCenter src='/static/image/mountaincenter.svg'/>
        <MountainRight src='/static/image/MountainRight.svg'/>
        <ChooseMonkey src='/static/image/right-thin-arrowheads (1).png'/>
        <Monkey onClick={() => setTeam('ling') } src='/static/image/Moling.svg'/>
        <ChooseGiant src='/static/image/right-thin-arrowheads.png'/>        
        <Giant onClick={() => setTeam('yak')}src='/static/image/Moyak.svg'/>
        <CloudBottom src='/static/image/เมฆ-บน.png'/>
        <LogoWip src="/static/image/logofinals.svg" />
        <LogoSIT src='/static/image/LogoSIT.png'/>
    </div>
)

// const BackgroundCompose = compose (state)(Background)

export default compose(
  withState('check','setCheck',true),
  lifecycle({
    componentDidMount () {
      let team = window.localStorage.getItem("team")
      const teamyak = {
        what: 'linear-gradient(to top , rgba(255,0,0,0),rgba(255, 51, 0,1))',
        when: 'red',
        nav: '#384742',
        navhov: '#002d40'
      }
      const teammongkey = {
        what : 'linear-gradient(to top, rgba(255,0,0,0), rgba(119, 169, 220, 1))' ,
        when : 'skyblue',
        nav : '#002d40',
        navhov : '#e53c35', 
      }
      team == 'yak' ? 
        window.localStorage.setItem("color",JSON.stringify(teamyak)) : 
        window.localStorage.setItem("color",JSON.stringify(teammongkey))
      let theme = JSON.parse(window.localStorage.getItem("color"))
      console.log(theme)
    }
  })
)(Background)
