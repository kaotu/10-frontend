import react from 'react'
import Bg from '../Core/BgStory'
import styled from 'styled-components'
import H1 from '../Core/FontH1'
import H2 from '../Core/FontH2'
import Color from '../Core/Color'

const Img = styled.img`
width:80vw;
position:relative;
top:0;
right:0;
@media (max-width: 720px) {
    width:80vw;
    position:relative;
    top:0;
    right:0;
}
`
const Front = styled.p`
  padding-top:0vw;
  margin-left:40vw;   
`
const Box1 = styled.div`
  position:absolute;
  top: 4em;
  left: 25em; 
  z-index:2;  
  text-align:center;
  @media (max-width: 720px) {
    
} 
`
const Box2 = styled.div`
  position:absolute;
  background-color:transparent;
  min-width:10vw;
  top: 10em;
  left: 35em;   
  z-index:2;
  text-align:center;
@media (max-width: 720px) {
}
`
const Box3 = styled.div`
  position:absolute;
  background-color:transparent;
  min-width:10vw;
  top: 15em;
  left:45em;   
  z-index:2;
  text-align:center;
  @media (max-width: 720px) {
}
`
const Box4 = styled.div`
  position:absolute;
  background-color:transparent;
  min-width:10vw;
  top: 20em;
  left: 60em;   
  z-index:2;
  text-align:center;
  @media (max-width: 720px) {
}
`
const Div = styled.div`{
  @media (max-width: 720px) {
    margin-top:5vw;
  }
`
const Moblie = () => (
  <Bg bgColor={Color.mongkey.when} className="d-flex">
    <div className="container-fluid">
      <div className="row">
        <Div className="col-12 col-sm-12 col-md-12">
          <H1 className="text-center font-weight-bold">WHEN</H1>
          <H2 className="text-center font-weight-bold">ค่ายนี้จัดเมื่อไหร่ ?</H2>
        </Div>
        <div className="col-12 col-sm-12 col-md-12">
          <Img src="/static/image/Climming.svg" className="rounded float-right" />
          <Box1 className="text-center">
            <h3>10 ก.พ. 61 <br /> วันเปิดรับสมัคร</h3>
          </Box1>
          <Box2 className="text-center">
            <h3>11 มี.ค 61 <br /> วันปิดรับสมัคร</h3>
          </Box2>
          <Box3 className="text-center">
            <h3>31 มี.ค 61 <br /> วันประกาศผล</h3>
          </Box3>
          <Box4 className="text-center">
            <h3>30 พ.ค - 3 มิ.ย 61 <br /> วันค่าย</h3>
          </Box4>
        </div>
      </div>
    </div>
  </Bg>
)
export default Moblie
