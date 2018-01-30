import react from 'react'
import Bg from '../Core/BgStory'
import styled from 'styled-components'
import H1 from '../Core/FontH1'
import H2 from '../Core/FontH2'
import Moblie from '../When/moblie'
import Color from '../Core/Color'

const Img = styled.img`
  width:40vw;
  right:0px;
`
const Head = styled.div`
  position:absolute;
  left:22vw;
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
  margin-left:30vw;   
`
const Box2 = styled.div`
  position:absolute;
  background-color:transparent;
  width:10vw;
  top:5vh;
  left:74vw;
  z-index:2;
`
const Box3 = styled.div`
  position:absolute;
  background-color:transparent;
  width:10vw;
  top:18vh;
  left:70vw;
  z-index:2;
`
const Box4 = styled.div`
  position:absolute;
  background-color:transparent;
  width:10vw;
  top:30vh;
  left:65vw;
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

const Space = styled.div`
  margin-top: 5%;
  margin-bottom: 10%;
`

const index = () => (
  <Bg bgColor={Color.mongkey.when} className="">
    <div className="container-fluid">
      <HideMobile>
        <div className="row">
          <Space className="col-12 col-sm-12 col-md-6 ">
            <Head>
              <H1 className="text-center">WHEN</H1>
              <H2 className="text-center">ค่ายนี้จัดเมื่อไหร่ ?</H2>
            </Head>
          </Space>
          <div className="col-12 col-sm-12 col-md-12  ">
            <Img src="/static/image/Climming.svg" className="rounded float-right" />
            <Box1 className="text-center">
              <h3>31 ม.ค. 61 <br /> วันค่าย</h3>
            </Box1>
            <Box2 className="text-center">
              <h3>31 ม.ค. 61 <br /> วันค่าย</h3>
            </Box2>
            <Box3 className="text-center">
              <h3>31 ม.ค. 61 <br /> วันค่าย</h3>
            </Box3>
            <Box4 className="text-center">
              <h3>31 ม.ค. 61 <br /> วันค่าย</h3>
            </Box4>
          </div>
        </div>
      </HideMobile>
      <HideDesktop>
        <Moblie />
      </HideDesktop>
    </div>
  </Bg>
)
export default index
