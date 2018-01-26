import react from 'react'
import Bg from '../Core/BgStory'
import styled from 'styled-components'
import H1 from '../Core/FontH1'
import H2 from '../Core/FontH2'
import Moblie from '../When/moblie'

const Img = styled.img`
    width:40vw;
    right:0px;
`
const Head = styled.div`
  position:absolute;
  top:20vh;
  left:15vw;
`
const Front = styled.p`
    padding-top:0vw;
    margin-left:40vw;   
`
const Box1 = styled.div`
    width: 20vw;
    height: 55hw;    
    padding: 1vw;
    background-color:#FBFBEF;
    opecity:0.9;
    border-radius: 0.2em;
    margin-top:33vw;
    margin-left:18vw;   
`
const Box2 = styled.div`
  position:absolute;
  background-color:red;
  width:10vw;
  top:10vh;
  left:60vw;
  z-index:2;
`
const Box3 = styled.div`
  position:absolute;
  background-color:green;
  width:10vw;
  top:25vh;
  left:55vw;
  z-index:2;
`
const Box4 = styled.div`
  position:absolute;
  background-color:blue;
  width:10vw;
  top:40vh;
  left:50vw;
  z-index:2;
`
const HideMobile = styled.div`
  @media (max-width: 720px) {
    display: none;
  }
`
const HideDesktop = styled.div`
  @media (min-width: 721px) {
    display: none;
  }
`

const index = () => (
  <Bg bgColor="#d5eff2" className="d-flex align-items-center">
    <div className="container-fluid">
    <HideMobile>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-6 ">
          <Head>
            <H1 className="text-center font-weight-bold">WHEN</H1>
            <H2 className="text-center font-weight-bold">ค่ายนี้จัดเมื่อไหร่ ?</H2>
          </Head>
        </div>
        <div className="col-12 col-sm-12 col-md-12  ">
          <Img src="/static/image/Climing.svg" className="rounded float-right" />
          <Box1 className="text-center">
            <p>31 มค 61</p>
            <p>วันค่าย</p>
          </Box1>
          <Box2 className="text-center">
            <p>31 มค 61</p>
            <p>วันค่าย</p>
          </Box2>
          <Box3 className="text-center">
            <p>31 มค 61</p>
            <p>วันค่าย</p>
          </Box3>
          <Box4 className="text-center">
            <p>31 มค 61</p>
            <p>วันค่าย</p>
          </Box4>
        </div>
      </div>
      </HideMobile>
      <HideDesktop>
      <Moblie/>
      </HideDesktop>
    </div>
  </Bg>
)
export default index