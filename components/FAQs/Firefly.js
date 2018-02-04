import styled, { keyframes } from "styled-components"
  

const firefly = keyframes`
    0% {
        transform: translate3d(3vh, 5vh, 0);    
        box-shadow: 5px 10px 100px white;
    }
    15% {
        transform: translate3d(8vh, 9vh, 0);    
        box-shadow: 0px 0px 0px red;
    }
    30% {
        transform: translate3d(8vh, 9vh, 0);    
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
        transform: translate3d(0vh, 0vh, 0);
        box-shadow: 5px 10px 100px white;
    }
`

const Fire = styled.div`
    position: absolute;
    top: 200%;
    left: 8%;
    transform: translate3d(-50%, -50%, 0);
    width: 55vh;
    height: 80vh;
`

const Firefly = Fire.extend`
    position: absolute;
    width: 2vh;
    height: 2vh;
    background-color: #aceb0e;
    border-radius: 50%;
    box-shadow: 0 0 10vh rgba(172, 235, 14, 0.8);
    
    animation: ${firefly} 15s linear infinite;
`

const index = props => (
    <Firefly/>
);

  export default index;