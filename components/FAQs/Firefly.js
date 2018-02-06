import styled, { keyframes } from "styled-components"
  
const Fire = styled.div`
    position: absolute;
    transform: translate3d(-50%, -50%, 0);
    width: 100vh;
    height: 100%;
`
const firefly = keyframes`
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
        transform: translate3d(16.19669vh, 13.15844vh, 0);
        box-shadow: 5px 10px 100px white; 
       }         
  }
`
const Firefly = Fire.extend`
    position: absolute;
    width: 2vh;
    height: 2vh;
    left: 30%;
    top: 20vh;
    background-color: #aceb0e;
    border-radius: 50%;
    box-shadow: 0 0 10vh yellow;
    
    animation: ${firefly} 30s linear infinite;
            
        @media(max-width: 767px){
            display : none;
          }
`
const Firefly2 = Fire.extend`
    position: absolute;
    width: 2vh;
    height: 2vh;
    right: 25%;
    top: 7vh;
    background-color: #aceb0e;
    border-radius: 50%;
    box-shadow: 0 0 10vh rgba(172, 235, 14, 0.8);
    
    animation: ${firefly} 20s linear infinite;
    @media(max-width: 767px){
        display : none;
      }
`
const Firefly3 = Fire.extend`
    position: absolute;
    width: 2vh;
    height: 2vh;
    top: 1vh;
    left: 15vw;
    background-color: #aceb0e;
    border-radius: 50%;
    box-shadow: 0 0 10vh rgba(172, 235, 14, 0.8);
    
    animation: ${firefly} 30s linear infinite;
    @media(max-width: 767px){
        display : none;
      }
    
`
const Firefly4 = Fire.extend`
    position: absolute;
    width: 2vh;
    height: 2vh;
    top: 100vh;
    right: 45vw;
    background-color: #aceb0e;
    border-radius: 50%;
    box-shadow: 0 0 50vh rgba(172, 235, 14, 0.8);
    
    animation: ${firefly} 25s linear infinite;
    @media(max-width: 767px){
        display : none;
      }
    
`
const Firefly5 = Fire.extend`
    position: absolute;
    width: 2vh;
    height: 2vh;
    top: 24vh;
    right: 50vw;
    background-color: #aceb0e;
    border-radius: 50%;
    box-shadow: 0 0 10vh rgba(172, 235, 14, 0.8);
    
    animation: ${firefly} 25s linear infinite;
    @media(max-width: 767px){
        display : none;
      }
    
`
const Firefly6 = Fire.extend`
    position: absolute;
    width: 2vh;
    height: 2vh;
    right: 5%;
    top: 10vh;
    background-color: #aceb0e;
    border-radius: 50%;
    box-shadow: 0 0 10vh rgba(172, 235, 14, 0.8);
    
    animation: ${firefly} 37s linear infinite;
    @media(max-width: 767px){
        display : none;
      }
`
const Div = styled.div`
  position : absolute;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  @media(max-width: 767px){
        display : none;
  }  
`


const index = props => (
    <Div>
      <Firefly/>
      <Firefly2/>
      <Firefly3/>
      <Firefly4/>
      <Firefly5/>
      <Firefly6/>
    </Div>
);

  export default index;
