import react from 'react'
import Bg from '../Core/BgStory'
import styled from 'styled-components'
import H1 from '../Core/FontH1'
import H2 from '../Core/FontH2'
import Color from '../Core/Color'

const Box1 = styled.div`
@media (min-width: 320px) {
  width:25vw;
  top: 0em;
  left: 1em; 
  z-index:2;  
  text-align:center;
  position: absolute;
  background-color:${props => props.box1 || 'rgba(0,0,0,.5)'};
  border: ${props => props.borderLine1 || ''};
  border-radius:1em;
  font-size:0.7em;
} 
  @media (min-width: 420px) {
    width:25vw;
    top: 0em;
    left: 0em; 
    z-index:2;  
    text-align:center;
    position: absolute;
    background-color:${props => props.box1 || 'rgba(0,0,0,.5)'};
    border: ${props => props.borderLine1 || ''};
    border-radius:1em;
  } 
  @media (min-width: 576px) {
    width:30vw;
    top: 0em;
    left: 0em; 
    z-index:2;  
    text-align:center;
    position: absolute;
    background-color:${props => props.box1 || 'rgba(0,0,0,.5)'};
    border: ${props => props.borderLine1 || ''};
    border-radius:1em;
  } 
`
const Box2 = styled.div`
  @media (min-width: 320px) {
    background-color:transparent;
    width:25vw;
    top: 2em;
    left: 9em; 
    z-index:2;  
    text-align:center;
    position: absolute;
    background-color:${props => props.box1 || 'rgba(0,0,0,.5)'};
    border: ${props => props.borderLine1 || ''};
    border-radius:1em;
    font-size:0.7em;
  }
  @media (min-width: 420px) {
    width:30vw;
    top: 0em;
    left: 0em; 
    z-index:2;  
    text-align:center;
    position: absolute;
    background-color:${props => props.box1 || 'rgba(0,0,0,.5)'};
    border: ${props => props.borderLine1 || ''};
    border-radius:1em;
  } 
  @media (min-width: 576px) {
    width:30vw;
    top: 0em;
    left: 0em; 
    z-index:2;  
    text-align:center;
    position: absolute;
    background-color:${props => props.box1 || 'rgba(0,0,0,.5)'};
    border: ${props => props.borderLine1 || ''};
    border-radius:1em;
  } 
`
const Box3 = styled.div`
@media (min-width: 320px) {
  background-color:transparent;
  width:25vw;
  top: 4em;
  left: 17em; 
  z-index:2;  
  text-align:center;
  position: absolute;
  background-color:${props => props.box1 || 'rgba(0,0,0,.5)'};
  border: ${props => props.borderLine1 || ''};
  border-radius:1em;
  font-size:0.7em;
}
@media (min-width: 420px) {
  width:30vw;
  top: 0em;
  left: 0em; 
  z-index:2;  
  text-align:center;
  position: absolute;
  background-color:${props => props.box1 || 'rgba(0,0,0,.5)'};
  border: ${props => props.borderLine1 || ''};
  border-radius:1em;
} 
@media (min-width: 576px) {
  width:30vw;
  top: 0em;
  left: 0em; 
  z-index:2;  
  text-align:center;
  position: absolute;
  background-color:${props => props.box1 || 'rgba(0,0,0,.5)'};
  border: ${props => props.borderLine1 || ''};
  border-radius:1em;
} 
`
const Box4 = styled.div`
@media (min-width: 320px) {
  background-color:transparent;
  width:30vw;
  top: 9em;
  left: 20em; 
  z-index:2;  
  text-align:center;
  position: absolute;
  background-color:${props => props.box1 || 'rgba(0,0,0,.5)'};
  border: ${props => props.borderLine1 || ''};
  border-radius:1em;
  font-size:0.7em;
}
@media (min-width: 420px) {
  width:30vw;
  top: 0em;
  left: 0em; 
  z-index:2;  
  text-align:center;
  position: absolute;
  background-color:${props => props.box1 || 'rgba(0,0,0,.5)'};
  border: ${props => props.borderLine1 || ''};
  border-radius:1em;
} 
@media (min-width: 576px) {
  width:30vw;
  top: 0em;
  left: 0em; 
  z-index:2;  
  text-align:center;
  position: absolute;
  background-color:${props => props.box1 || 'rgba(0,0,0,.5)'};
  border: ${props => props.borderLine1 || ''};
  border-radius:1em;
} 
`
const Div = styled.div`{
  @media (max-width: 768px) {
    margin-top:5vw;
  }
`
const Moutain = styled.img`
@media (max-width: 768px) {
  letf:0;
  width:100vw;
  z-index:0; 
  margin-top:7em;
  position: absolute;
  margin-bottom:0em;
  
}
`
const Div1 = styled.div`{
  @media (max-width: 768px) {
    margin-top:5%;
  }
`
const P = styled.p`
@media (max-width: 768px) {
  font-size:1em
}
`
const Bggradient = styled.div`
background: ${props => props.themeColor || ''};
`

const Moblie = () => (
  <Bggradient themeColor={props.bg.when} className="" >
    <div className="container">
      <div className="row">
        <Div className="col-12">
          <H1 className="text-center font-weight-bold">WHEN</H1>
          <H2 className="text-center font-weight-bold">ค่ายนี้จัดเมื่อไหร่ ?</H2>
        </Div>
        <Div1 className="col-12">
          <Box1 className="text-center">
            <P>10 ก.พ. 61 <br /> วันเปิดรับสมัคร</P>
          </Box1>
          <Box2 className="text-center">
            <P>11 มี.ค 61 <br /> วันปิดรับสมัคร</P>
          </Box2>
          <Box3 className="text-center">
            <P>31 มี.ค 61 <br /> วันประกาศผล</P>
          </Box3>
          <Box4 className="text-center">
            <P>30 พ.ค - 3 มิ.ย 61 <br /> วันค่าย</P>
          </Box4>
        </Div1>
      </div>
    </div>
    <Moutain src='/static/image/MoutainWhenMoblie.svg'/>
  </Bggradient>
)
export default Moblie
