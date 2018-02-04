import react from 'react'
import Bg from '../Core/BgStory'
import styled from 'styled-components'
import H1 from '../Core/FontH1'
import H2 from '../Core/FontH2'
import Color from '../Core/Color'

const Box1 = styled.div`
  @media (max-width: 720px) {
    width:30vw;
    top: 14em;
    left: 5em; 
    z-index:2;  
    text-align:center;
} 
`
const Box2 = styled.div`
@media (max-width: 720px) {
  background-color:transparent;
  width:30vw;
  top: 16em;
  margin-left: 5em; 
  z-index:2;  
  text-align:center;
}
`
const Box3 = styled.div`
@media (max-width: 720px) {
  background-color:transparent;
  width:30vw;
    top: 19em;
    margin-left: 10em; 
    z-index:2;  
    text-align:center;
}
`
const Box4 = styled.div`
@media (max-width: 720px) {
  background-color:transparent;
  width:35vw;
    top: 30em;
    margin-left: 13em; 
    z-index:2;  
    text-align:center;
}
`
const Div = styled.div`{
  @media (max-width: 720px) {
    margin-top:5vw;
  }
`
const Moutain = styled.img`
@media (max-width: 720px) {
  letf:0;
  width:100vw;
}
`
const P = styled.p`
@media (max-width: 720px) {
  font-size:1em
}
`
const Moblie = () => (
  <Bg bgColor={Color.mongkey.when} >
    <div className="container">
      <div className="row">
        <Div className="col-12">
          <H1 className="text-center font-weight-bold">WHEN</H1>
          <H2 className="text-center font-weight-bold">ค่ายนี้จัดเมื่อไหร่ ?</H2>
        </Div>
        <div className="col-12">
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
        </div>
      </div>
    </div>
    <Moutain src='/static/image/MoutainWhenMoblie.png' />
  </Bg>
)
export default Moblie
