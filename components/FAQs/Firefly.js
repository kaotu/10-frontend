import styled, { keyframes } from "styled-components"
  
const Fire = styled.div`
    position: absolute;
    transform: translate3d(-50%, -50%, 0);
    width: 100vh;
    height: 100%;
`

const Firefly = Fire.extend`
    position: absolute;
    left: 30%;
    top: 20vh;
    width: 5vh;
    height: 5vh;
    background-color: #aceb0e;
    border-radius: 50%;
    box-shadow: 0 0 10vh yellow;
    
    animation: firefly 30s linear infinite;
    animation-delay: 1s;
    @keyframes firefly {
            0%{
                transform: translate3d(16.19669vh, 13.15844vh, 0);
            box-shadow: 5px 10px 100px white;
            }
          10% {
                    transform: translate3d(16.19669vh, 13.15844vh, 0);
            box-shadow: 0px 0px 0px yellow;
          }
          20% {
                    transform: translate3d(-4.79835vh, -8.31402vh, 0);
            box-shadow: 2px 6px 60vh yellow;
          }
          30% {
                    transform: translate3d(-10.12599vh, 11.04988vh, 0);
            box-shadow: 5px 10px 100px white;          }
          40% {
                    transform: translate3d(14.60919vh, -19.41952vh, 0);
            box-shadow: 0 0 0px yellow;
          }
          50% {
                    transform: translate3d(-9.54075vh, 6.90568vh, 0);
            box-shadow: 2px 6px 60vh yellow;          }
          60% {
                    transform: translate3d(8.1726vh, -9.65667vh, 0);
            box-shadow: 5px 10px 100px white;
          }
          70% {
                    transform: translate3d(0.91368vh, 8.50969vh, 0);
        box-shadow: 0 0 0px yellow;         }
          80% {
                    transform: translate3d(-9.64417vh, 1.28783vh, 0);
            box-shadow: 2px 6px 60vh yellow;
          }
          100% {
                    transform: translate3d(13.29154vh, 16.03967vh, 0);
        box-shadow: 5px 10px 100px white;          }
        }
`
const Firefly2 = Fire.extend`
    position: absolute;
    right: 25%;
    top: 7vh;
    width: 2vh;
    height: 2vh;
    background-color: #aceb0e;
    border-radius: 50%;
    box-shadow: 0 0 10vh rgba(172, 235, 14, 0.8);
    
    animation: firefly 20s linear infinite;
`
const Firefly3 = Fire.extend`
    position: absolute;
    top: 1vh;
    left: 15vw;
    width: 3vh;
    height: 3vh;
    background-color: #aceb0e;
    border-radius: 50%;
    box-shadow: 0 0 10vh rgba(172, 235, 14, 0.8);
    
    animation: firefly 30s linear infinite;
    animation-delay: 2s;
    
`
const Firefly4 = Fire.extend`
    position: absolute;
    top: 100vh;
    right: 45vw;
    width: 1vh;
    height: 1vh;
    background-color: #aceb0e;
    border-radius: 50%;
    box-shadow: 0 0 50vh rgba(172, 235, 14, 0.8);
    
    animation: firefly 25s linear infinite;
    
`
const Firefly5 = Fire.extend`
    position: absolute;
    top: 24vh;
    right: 50vw;
    width: 4vh;
    height: 4vh;
    background-color: #aceb0e;
    border-radius: 50%;
    box-shadow: 0 0 10vh rgba(172, 235, 14, 0.8);
    
    animation: firefly 25s linear infinite;
    animation-delay: 1s;
    
`
const Firefly6 = Fire.extend`
    position: absolute;
    right: 5%;
    top: 10vh;
    width: 2vh;
    height: 2vh;
    background-color: #aceb0e;
    border-radius: 50%;
    box-shadow: 0 0 10vh rgba(172, 235, 14, 0.8);
    
    animation: firefly 37s linear infinite;
`
const Firefly7 = Fire.extend`
    position: absolute;
    left: 5%;
    top: 25vh;
    width: 4vh;
    height: 4vh;
    background-color: #aceb0e;
    border-radius: 50%;
    box-shadow: 0 0 10vh rgba(172, 235, 14, 0.8);
    
    animation: firefly 29s linear infinite;
    animation-delay: 1s;
`
const Firefly8 = Fire.extend`
    position: absolute;
    right: 25%;
    top: 88vh;
    width: 3vh;
    height: 3vh;
    background-color: #aceb0e;
    border-radius: 50%;
    box-shadow: 0 0 10vh rgba(172, 235, 14, 0.8);
    
    animation: firefly 41s linear infinite;
`
const Firefly9 = Fire.extend`
    position: absolute;
    right: 15%;
    top: 100vh;
    width: 2vh;
    height: 2vh;
    background-color: #aceb0e;
    border-radius: 50%;
    box-shadow: 0 0 10vh rgba(172, 235, 14, 0.8);
    
    animation: firefly 30s linear infinite;
    animation-delay: 1s;
`
const Firefly10 = Fire.extend`
    position: absolute;
    left: 10%;
    top: 50vh;
    width: 5vh;
    height: 5vh;
    background-color: #aceb0e;
    border-radius: 50%;
    box-shadow: 0 0 17vh rgba(172, 235, 14, 0.8);
    
    animation: firefly 22s linear infinite;
    animation-delay: 2s;
`
const Firefly11 = Fire.extend`
    position: absolute;
    right: 10%;
    bottom: 20vh;
    width: 5vh;
    height: 5vh;
    background-color: #aceb0e;
    border-radius: 50%;
    box-shadow: 0 0 17vh rgba(172, 235, 14, 0.8);
    
    animation: firefly 22s linear infinite;
    animation-delay: 2s;
`
const Firefly12 = Fire.extend`
    position: absolute;
    left: 10%;
    bottom: 10vh;
    width: 5vh;
    height: 5vh;
    background-color: #aceb0e;
    border-radius: 50%;
    box-shadow: 0 0 17vh rgba(172, 235, 14, 0.8);
    
    animation: firefly 22s linear infinite;
    animation-delay: 2s;
`
const Div = styled.div`
    position : absolute;
    z-index: 1;
    width: 100vw;
    height: 100vh;
`


const index = props => (
    <Div>
    <Firefly/>
    <Firefly2/>
    <Firefly3/>
    <Firefly4/>
    <Firefly5/>
    <Firefly6/>
    <Firefly7/>
    <Firefly8/>
    <Firefly9/>
    <Firefly10/>
    <Firefly11/>
    <Firefly12/>
    </Div>
);

  export default index;