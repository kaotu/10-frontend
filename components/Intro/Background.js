import react from 'react'
import styled from 'styled-components'
import {compose, withState , lifecycle} from 'recompose'
import Color from '../Core/Color'

const CloudBack = styled.div`
    position:absolute;
    z-index: 0;
    margin:0;
    padding:0;
    top:35vh;
    left: 0vw;
    height:10vh;
    width:100vw;
    background: url(${props => props.cloud || ''}) repeat 0 0;
    background-position: 20vw 0;
    animation: 300s linear 0s normal none infinite animated;
    background-repeat: repeat-x;
    @keyframes animated {
        from {background-position: 20vw 0;}
        to {background-position: 220vw 0;}
    }
    @media(max-width:720px){
        top:12em;
    }
    @media(max-width:420px){
      width:100vw;
      right:0vw;
      top:25vh;
    }
    
`
const CloudBack1 = styled.div`
    position:absolute;
    z-index: 0;
    margin:0;
    padding:0;
    top: 42vh;
    left: 20vw;
    height:20vh;
    width:100vw;
    background: url(${props => props.cloud1 || ''}) repeat 0 0;
    animation: 240s linear 0s normal none infinite animate;
    background-repeat: repeat-x;
    @keyframes animate {
        from {background-position:0 0;}
        to {background-position: 200vw 0;}
    }
    @media(max-width:720px){
      top:23em;
      left:0vw;
    }
    @media(max-width:420px){
      width:200vw;
      right:0vw;
      top:35vh;
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
    @media(max-width:420px){
      width:180vw;
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
  left: 18vw;
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
    margin-top : 13vw;
    left: 21vw;
    width:5vw;
  }
  @media(max-width:560px){
    margin-top:19vh;
    margin-left:5vw;
  }
  @media(max-width: 420px){
    left: 25vw;
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
    width:30%;
    bottom:2.5em;
    left:4em;
  }
  @media(max-width: 560px){
    margin-bottom:-3vh;
    width: 35%;
  }
  // @media(max-width: 420px){
  //   height: 30vh;
  //   bottom:12vh;
  // }
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
  right: 15vw;
  width:3vw;
  animation: MoveUpDown 1s linear infinite;
  cursor:pointer; 
  @media(max-width: 1024px){
    right : 18vw;
  }
  @media(max-width: 768px){
    right : 25vw;
  }
  @media(max-width: 720px){
    margin-top : 13vw;
    right: 25vw;
    width:5vw;
  }
  @media(max-width:560px){
    margin-top:19vh;
  }
  @media(max-width: 420px){
    right: 28vw;
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
  @media(max-width: 768px){
    width:35%;
    right:3.5em;
  }
  @media(max-width: 720px){
    width:35%;
    bottom:-0.5em;
    right:3.5em;
  }
  // @media(max-width: 560px){
  //   height: 36vh;
  // }
  // @media(max-width: 420px){
  //   height: 30vh;
  //   bottom:10vh;
  // }
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

    @media(max-width:720px){
      width:150%;
    }
    @media(max-width:560px){
      width:200%;
    }
    @media(max-width: 420px){
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
    top:2em;
  }
  @media(max-width: 420px){
    width: 100%;
    left: 0vw;
    top:3em;
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
    width: 50%;
    left: 26vw;
    top:12em;
  }
  @media(max-width: 420px){
    width: 60%;
    left: 22vw;
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
        <CloudBack cloud={props.team.cloud}/>
        <CloudBack1 cloud1={props.team.cloud}/>
        <MountainLeft src='/static/image/MountainLeft.svg'/>
        <MountainCenter src='/static/image/mountaincenter.svg'/>
        <MountainRight src='/static/image/MountainRight.svg'/>
        <ChooseMonkey src='/static/image/right-thin-arrowheads (1).png'/>
        <Monkey onClick={() => setTeam('ling') } src='/static/image/Moling.svg' alt="พี่ลิง"/>
        <ChooseGiant src='/static/image/right-thin-arrowheads.png'/>        
        <Giant onClick={() => setTeam('yak')}src='/static/image/Moyak.svg' alt="พี่ยักษ์"/>
        <CloudBottom src='/static/image/เมฆ-บน.png'/>
        <LogoWip src="/static/image/logofinals.svg" alt="WIP Camp #10" />
        <LogoSIT src='/static/image/LogoSIT.png'alt="WIP Camp #10,คณะเทคโนโลยีสารสนเทศ,มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี" />
    </div>
)

// const BackgroundCompose = compose (state)(Background)

export default compose(
  withState('check','setCheck',true),
  withState('team','setTeam',''),
  lifecycle({
    componentDidMount () {
      let team = window.localStorage.getItem("team")
      const teamyak = {
        what: 'linear-gradient(to top , rgba(0,0,0,.65),rgba(255, 51, 0,1))',
        when: 'linear-gradient(to top , rgba(0,0,0,.65),rgba(255, 51, 0,1),rgba(0,0,0,.65))',
        nav: '#384742',
        navhov: '#002d40',
        iconl: '../../static/image/yakscore-new-01.svg',
        iconr: '../../static/image/hanumanscore-new-01.svg',
        scroll: '../../static/image/ScrollYak.png' ,
        cloud: '../../static/image/hanumanscore-new-01.svg'
      }
      const teammongkey = {
        what : 'linear-gradient(to top, rgba(0,0,0,.65), rgba(119, 169, 220, 1),rgba(119, 169, 220, 1))' ,
        when : 'linear-gradient(to top, rgba(0,0,0,.65),rgba(119, 169, 220, 1),rgba(0,0,0,.65))',
        nav : '#002d40',
        navhov : '#e53c35',
        iconl: '../../static/image/hanumanscore-new-01.svg' ,
        iconr: '../../static/image/yakscore-new-01.svg',
        scroll: '../../static/image/ScrollMongkey.png' ,
        cloud: '../../static/image/CloudBack.svg'
      }
      team == 'yak' ? 
        window.localStorage.setItem("color",JSON.stringify(teamyak)) : 
        window.localStorage.setItem("color",JSON.stringify(teammongkey))
      let theme = JSON.parse(window.localStorage.getItem("color"))
      this.props.setTeam(theme)
    }
  })
)(Background)
