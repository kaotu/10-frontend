import react from 'react'
import Bg from '../Core/BgStory'
import styled from 'styled-components'
import H1 from '../Core/FontH1'
import H2 from '../Core/FontH2'
import Moblie from '../When/moblie'
import Color from '../Core/Color'
import {compose, lifecycle} from 'recompose'

const Relative = styled.div`
  position: relative;
`
const Moutain = styled.img`
  position: absolute; 
  z-index: 1;
  top: 40vh;
`
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
  position:absolute;
  background-color:transparent;
  top: 4em;
  left: 25em;   
  z-index:2;
`
const Box2 = styled.div`
  position:absolute;
  background-color:transparent;
  min-width:10vw;
  top: 10em;
  left: 35em;   
  z-index:2;
`
const Box3 = styled.div`
  position:absolute;
  background-color:transparent;
  min-width:10vw;
  top: 15em;
  left:45em;   
  z-index:2;
`
const Box4 = styled.div`
  position:absolute;
  background-color:transparent;
  min-width:10vw;
  top: 20em;
  left: 60em;   
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
  <Relative>
    <Moutain src='/static/image/MoutainWhen.svg' className="img responsive"/>
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
            {/* <Img src="/static/image/Climming.svg" className="rounded float-right" /> */}
            <Box1 className="text-center">
              <p>10 ก.พ. 61 <br /> วันเปิดรับสมัคร</p>
            </Box1>
            <Box2 className="text-center">
              <p>11 มี.ค 61 <br /> วันปิดรับสมัคร</p>
            </Box2>
            <Box3 className="text-center">
              <p>31 มี.ค 61 <br /> วันประกาศผล</p>
            </Box3>
            <Box4 className="text-center">
              <p>30 พ.ค - 3 มิ.ย 61 <br /> วันค่าย</p>
            </Box4>
          </div>
        </div>
      </HideMobile>
      <HideDesktop>
        <Moblie />
      </HideDesktop>
    </div>
    </Relative>
  </Bg>
)

export default compose(
  lifecycle({
    componentDidMount() {
      let date = new Date()
      let timeline =new Intl.DateTimeFormat('th-th').format(date)
      console.log(timeline)
      if (timeline == "10/2/2561"){
        
      }
    }
  })
)(index)
