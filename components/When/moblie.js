import react from 'react'
import Bg from '../Core/BgStory'
import styled from 'styled-components'
import H1 from '../Core/FontH1'
import H2 from '../Core/FontH2'
import Color from '../Core/Color'

const Box1 = styled.div`
text-align:center;
background-color:${props => props.box1 || 'rgba(0,0,0,.5)'};
border: ${props => props.borderLine1 || ''};
border-radius:1em;
z-index:2;
padding:0.5em 0.5em 0em;
margin-bottom: 5%;
width:10em;
  @media (min-width: 320px) {
    margin-bottom: 5%;
    padding:0.5em 0.5em 0em;
  } 
`
const Div = styled.div`
  @media (min-width: 320px) {
    margin-top:10%;
    margin-bottom: 5%;
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
const Div1 = styled.div`
left:10em;
padding:0.5em;
  @media (max-width: 320px) {
    
  }
`
const P = styled.p`
@media (max-width: 768px) {
  font-size:1em
}
`
const Moblie = () => (
  <Bg >
    <div className="container">
      <div className="row justify-content-center">
        <Div className="col-12">
          <H1 className="text-center font-weight-bold">WHEN</H1>
          <H2 className="text-center font-weight-bold">ค่ายนี้จัดเมื่อไหร่ ?</H2>
        </Div>
      </div>
    </div>
    <div className="container">
    <div className="row justify-content-center">
        <div className="row col-12 justify-content-center">
          <Box1>
            <P>10 ก.พ. 61 <br /> วันเปิดรับสมัคร</P>
          </Box1>
          </div>
          <div className="row col-12 justify-content-center">
          <Box1>
            <P>11 มี.ค 61 <br /> วันปิดรับสมัค</P>
          </Box1>
          </div>  
          <div className="row col-12 justify-content-center">
          <Box1>
            <P>31 มี.ค 61 <br /> วันประกาศผล</P>
          </Box1>
          </div>  
          <div className="row col-12 justify-content-center">
          <Box1>
            <P>30 พ.ค - 3 มิ.ย 61 <br /> วันค่าย</P>
          </Box1>
          </div>  
          </div>
          </div>
  </Bg>
)
export default Moblie
