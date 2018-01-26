import react from 'react'
import Bg from '../Core/BgStory'
import styled from 'styled-components'
import H1 from '../Core/FontH1'
import H2 from '../Core/FontH2'

const Img = styled.img`
    width:70vw;
    right:-20vw;
`
const Front = styled.p`
  padding-top:0vw;
  margin-left:40vw;   
`
const Box1 = styled.div`
    position:absolute;
    background-color:white;
    opacity:0.5;
    width:20vw;
    top:35vh;
    left:10vw;
    z-index:2;   
`
const Box2 = styled.div`
  position:absolute;
  background-color:red;
  width:20vw;
  top:5vh;
  left:70vw;
  z-index:2;
`
const Box3 = styled.div`
  position:absolute;
  background-color:green;
  width:20vw;
  top:20vh;
  left:65vw;
  z-index:2;
`
const Box4 = styled.div`
  position:absolute;
  background-color:blue;
  width:20vw;
  top:35vh;
  left:60vw;
  z-index:2;
`

const Moblie = () => (
    <Bg bgColor="#d5eff2" className="d-flex align-items-center">
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12">
                    <H1 className="text-center font-weight-bold">WHEN</H1>
                    <H2 className="text-center font-weight-bold">ค่ายนี้จัดเมื่อไหร่ ?</H2>
                </div>
                <div className="col-12 col-sm-12 col-md-12">
                    <Img src="/static/image/Climing.svg" className="rounded float-right" alt="Responsive image" />
                    <div>
                        <Box1>
                            <p>31 มค 61</p>
                            <p>วันค่าย</p>
                        </Box1>
                        <Box2>
                            <p>31 มค 61</p>
                            <p>วันค่าย</p>
                        </Box2>
                        <Box3>
                            <p>31 มค 61</p>
                            <p>วันค่าย</p>
                        </Box3>
                        <Box4>
                            <p>31 มค 61</p>
                            <p>วันค่าย</p>
                        </Box4>
                    </div>
                </div>
            </div>
        </div>
    </Bg>
)
export default Moblie