import react from 'react'
import Bg from '../Core/BgStory'
import styled from 'styled-components'
import H1 from '../Core/FontH1'
import H2 from '../Core/FontH2'
import Moblie from '../When/moblie'
import Color from '../Core/Color'
import {compose, lifecycle, withState} from 'recompose'

const Relative = styled.div`
  position: relative;
`
const Moutain = styled.img`
  position: absolute; 
  z-index: 1;
  top: 40vh;
  margin-bottom: 10%;
  @media (max-width: 720px) {
    
  }
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
  top: 4em;
  left: 25em;   
  z-index:2;
  background-color:${props => props.box1 || 'transparent'};
  border: 0vw;
  border-radius:1em;
`
const Box2 = styled.div`
  position:absolute;
  min-width:10vw;
  top: 10em;
  left: 35em;   
  z-index:2;
  background-color:${props => props.box2 || 'transparent'};
  border: 0vw;
  border-radius:1em;
  padding:.5em 5em;
`
const Box3 = styled.div`
  position:absolute;
  min-width:10vw;
  top: 15em;
  left:45em;   
  z-index:2;
  background-color:${props => props.box3 || 'transparent'};
  border: 0vw;
  border-radius:1em;
  padding:.5em 5em;
`
const Box4 = styled.div`
  position:absolute;
  min-width:10vw;
  top: 20em;
  left: 60em;   
  z-index:2;
  background-color:${props => props.box4 || 'transparent'};
  border: 0vw;
  border-radius:1em;
  padding:.5em 5em;
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
const Time = styled.p`
  display:block;
  color:#fff;
`

const index = props => (
  <Bg bgColor={props.bg.when} className="">
  <Relative>
      <HideMobile>
    <Moutain src='/static/image/MoutainWhen.svg'/>
    <div className="container-fluid">
        <div className="row">
          <Space className="col-12 col-sm-12 col-md-6 ">
            <Head>
              <H1 className="text-center">WHEN</H1>
              <H2 className="text-center">ค่ายนี้จัดเมื่อไหร่ ?</H2>
            </Head>
          </Space>
          <div className="col-12 col-sm-12 col-md-12  ">
            {/* <Img src="/static/image/Climming.svg" className="rounded float-right" /> */}
            <Box1 box1={props.box1} className="text-center">
              <Time>10 ก.พ. 61 <br /> วันเปิดรับสมัคร</Time>
            </Box1>
            <Box2 box2={props.box2} className="text-center">
              <Time>11 มี.ค 61 <br /> วันปิดรับสมัคร</Time>
            </Box2>
            <Box3 box3={props.box3} className="text-center">
              <Time>31 มี.ค 61 <br /> วันประกาศผล</Time>
            </Box3>
            <Box4 box4={props.box4} className="text-center">
              <Time>30 พ.ค - 3 มิ.ย 61 <br /> วันค่าย</Time>
            </Box4>
          </div>
        </div>
    </div>
      </HideMobile>
      <HideDesktop>
        <Moblie />
      </HideDesktop>
    </Relative>
  </Bg>
)

export default compose(
  withState('bg','setBg',''),
  withState('box1','setBox1',''),
  withState('box2','setBox2',''),
  withState('box3','setBox3',''),
  withState('box4','setBox4',''),
  lifecycle({
    componentDidMount() {
      let date = new Date()
      let timeline =new Intl.DateTimeFormat('th-th').format(date)
      console.log(timeline)
      switch(timeline){
        case '30/5/2561': this.props.setBox4('rgba(0,0,0,.5)'); 
        case '31/3/2561': this.props.setBox3('rgba(0,0,0,.5)');
        case '11/3/2561': this.props.setBox2('rgba(0,0,0,.5)');
        case '10/2/2561': this.props.setBox1('rgba(0,0,0,.5)'); 
      }

      let theme = window.localStorage.getItem("color")
      const whenColor = JSON.parse(theme)
      this.props.setBg(whenColor)
    }
  })
)(index)
