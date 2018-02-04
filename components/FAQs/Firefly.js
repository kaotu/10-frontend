import styled, { keyframes } from "styled-components"
  
const Fire = styled.div`
    position: absolute;
    transform: translate3d(-50%, -50%, 0);
    width: 55vh;
    height: 80vh;
`

const Firefly = Fire.extend`
    position: absolute;
    left: 10%;
    top: 20vh;
    width: 2vh;
    height: 2vh;
    background-color: #aceb0e;
    border-radius: 50%;
    box-shadow: 0 0 10vh rgba(172, 235, 14, 0.8);
    
    animation: firefly 15s linear infinite;
    @keyframes firefly{
        0% {
            transform: translate3d(5vh, 7vh, 0);    
            box-shadow: 5px 10px 100px white;
        }
        15% {
            transform: translate3d(8vh, 9vh, 0);    
            box-shadow: 0px 0px 0px red;
        }
        30% {
            transform: translate3d(10vh, 9vh, 0);    
            box-shadow: 2px 6px 60px red;
        }
        45% {
            transform: translate3d(8vh, 9vh, 0);    
            box-shadow: 0px 0px 0px red;
        }
        60% {
            transform: translate3d(10vh, 6vh, 0);    
            box-shadow: 5px 10px 100px white;
        }
        75% {
            transform: translate3d(2vh, 0vh, 0);    
            box-shadow: 0px 0px 0px red;
        }
        90% {
            transform: translate3d(-5vh, 4vh, 0);
            box-shadow: 5px 10px 100px white;
        }
        100% {
            transform: translate3d(5vh, 7vh, 0);
            box-shadow: 5px 10px 100px white;
        }
    }
`
const Firefly2 = Fire.extend`
    position: absolute;
    right: 10%;
    top: 50vh;
    width: 2vh;
    height: 2vh;
    background-color: #aceb0e;
    border-radius: 50%;
    box-shadow: 0 0 10vh rgba(172, 235, 14, 0.8);
    
    animation: firefly 20s linear infinite;
`
const Firefly3 = Fire.extend`
    position: absolute;
    top: 80vh;
    left: 5vw;
    width: 2vh;
    height: 2vh;
    background-color: #aceb0e;
    border-radius: 50%;
    box-shadow: 0 0 10vh rgba(172, 235, 14, 0.8);
    
    animation: firefly 10s linear infinite;
    
`
const Firefly4 = Fire.extend`
    position: absolute;
    top: 100vh;
    right: 15vw;
    width: 2vh;
    height: 2vh;
    background-color: #aceb0e;
    border-radius: 50%;
    box-shadow: 0 0 10vh rgba(172, 235, 14, 0.8);
    
    animation: firefly 25s linear infinite;
    
`


const index = props => (
    <div>
    <Firefly/>
    <Firefly2/>
    <Firefly3/>
    <Firefly4/>
    </div>
);

  export default index;