import react from 'react'
import Bg from '../Core/BgStory'
import styled from 'styled-components'
import H1 from '../Core/FontH1'
import H2 from '../Core/FontH2'

const Img = styled.img`
@media (max-width: 720px) {
    width:90vw;
    right:-20vw;
    position:absolute;
    top:0;
}
`
const Front = styled.p`
  padding-top:0vw;
  margin-left:40vw;   
`
const Box1 = styled.div`
@media (max-width: 720px) {
    position:absolute;
    background-color:white;
    opacity:0.5;
    width:22vw;
    top:42vh;
    left:5vw;
    z-index:2;  
    text-align:center;
} 
`
const Box2 = styled.div`
@media (max-width: 720px) {
  position:absolute;
  background-color:transparent;
  width:20vw;
  top:1vh;
  left:67vw;
  z-index:2;
  text-align:center;
}
`
const Box3 = styled.div`
@media (max-width: 720px) {
  position:absolute;
  background-color:transparent;
  width:20vw;
  top:10vh;
  left:58vw;
  z-index:2;
  text-align:center;
}
`
const Box4 = styled.div`
@media (max-width: 720px) {
  position:absolute;
  background-color:transparent;
  width:20vw;
  top:20vh;
  left:48vw;
  z-index:2;
  text-align:center;
}
`
const Div = styled.div`{
    @media (max-width: 720px) {
       margin-top:5vw;
      }
`
const Moblie = () => (
    <Bg bgColor="#d5eff2" className="d-flex">
        <div className="container-fluid">
            <div className="row">
                <Div className="col-12 col-sm-12 col-md-12">
                    <H1 className="text-center font-weight-bold">WHEN</H1>
                    <H2 className="text-center font-weight-bold">ค่ายนี้จัดเมื่อไหร่ ?</H2>
                </Div>
                <div className="col-12 col-sm-12 col-md-12">
                    <Img src="/static/image/Climing.svg" className="rounded float-right" alt="Responsive image" />
                        <Box1 className="text center">
                        <p>31 ม.ค. 61 <br /> วันค่าย</p>
                        </Box1>
                        <Box2 className="text center">
                        <p>31 ม.ค. 61 <br /> วันค่าย</p>
                        </Box2 >
                        <Box3 className="text center">
                        <p>31 ม.ค. 61 <br /> วันค่าย</p>
                        </Box3>
                        <Box4 className="text center">
                        <p>31 ม.ค. 61 <br /> วันค่าย</p>
                        </Box4>
                </div>
            </div>
        </div>
    </Bg>
)
export default Moblie