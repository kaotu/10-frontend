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
  height : 100vh;
`
const Moutain = styled.img`
  position: absolute; 
  z-index: 1;
  top: 15em;
  margin-bottom: 10%;
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
  min-width: 10vw;
  position:absolute;
  top: 18em;
  left: 10em;   
  z-index:2;
  background-color:${props => props.box1 || 'rgba(0,0,0,.5)'};
  border: ${props => props.borderLine1 || ''};
  border-radius:1em;
  padding:.5em 5em;
  @media (min-width: 768px) {
    position:absolute;
    min-width:10vw;
    top: 10em;
    left: 2em;
    padding:.5em 1.5em;
  }
  @media (min-width: 1024px) {
    top: 18em;
    left: 10em; 
    padding:.5em 3em;
  }
`
const Box2 = styled.div`
  position:absolute;
  min-width:10vw;
  top: 20em;
  left: 25em;    
  z-index:2;
  background-color:${props => props.box2 || 'rgba(0,0,0,.5)'};
  border: ${props => props.borderLine2 || ''};
  border-radius:1em;
  padding:.5em 5em;
  @media (min-width: 768px) {
    position:absolute;
    min-width:10vw;
    top: 13em;
    left: 14em;
    padding:.5em 1.5em;
  }
  @media (min-width: 1024px) {
    top: 20em;
    left: 25em; 
    padding:.5em 3em;
  }
`
const Box3 = styled.div`
  position:absolute;
  min-width:10vw;
  top: 22em;
  left:40em;  
  z-index:2;
  background-color:${props => props.box3 || 'rgba(0,0,0,.5)'};
  border: ${props => props.borderLine3 || ''};
  border-radius:1em;
  padding:.5em 5em;
  @media (min-width: 768px) {
    position:absolute;
    min-width:10vw;
    top: 18em;
    left: 26em;
    padding:.5em 1.5em;
  }
  @media (min-width: 1024px) {
    top: 22em;
    left:40em;  
    padding:.5em 3em;
  }
`
const Box4 = styled.div`
  position:absolute;
  min-width:10vw;
  top: 25em;
  left:55em;   
  z-index:2;
  background-color:${props => props.box4 || 'rgba(0,0,0,.5)'};
  border: ${props => props.borderLine4 || ''};
  border-radius:1em;
  padding:.3em 3em;
  @media (min-width: 768px) {
    position:absolute;
    min-width:10vw;
    top: 25em;
    left: 33em;
    padding:.5em 1.5em;
  }
  @media (min-width: 1024px) {
    top: 25em;
    left:55em;  
    padding:.5em 3em;
  }
`
const HideMobile = styled.div`
  @media (max-width: 720px) {
    display: none;
  }
`
const HideDesktop = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`

const Space = styled.div`
  margin-top: 6%;
  margin-bottom: 10%;
`
const Space2 = styled.div`
  position: absolute;
`
const Time = styled.p`
  display:block;
  color:#fff;
`
const Bgtop = styled.img`
position: absolute;
top: 0vh;
width : 100.6%;
margin-top : -1
@media (min-width:768px) {
  margin-top : 0;
}
`
const Bgbottom = styled.img`
position : absolute;
left : 0vw;
width : 100%;
bottom: 0vh;
margin-left:0em;
z-index:2;
@media (min-width:768px) {
  margin-top : 2%;
}
`
const Zindex = styled.div`
  z-index : 1;
`

const Bggradient = styled.div`
background: ${props => props.themeColor || ''};
`

const index = props => (
  <Bggradient themeColor={props.bg.when} className="">
    <Relative>
    <Bgtop src = '/static/image/topwhen.png'/>
    <HideMobile><Bgbottom src = '/static/image/bottomwhen.png'/></HideMobile>
      <HideMobile>
    <div className="container-fluid">
        <div className="row">
          <Space className="col-12 col-sm-12 col-md-6 ">
            <Head>
              <H1 className="text-center">WHEN</H1>
              <H2 className="text-center">ค่ายนี้จัดเมื่อไหร่ ?</H2>
            </Head>
          </Space>
          <Space2 className="col-12 col-sm-12 col-md-12  ">
            {/* <Img src="/static/image/Climming.svg" className="rounded float-right" /> */}
            <Box1 box1={props.box1} borderLine1={props.border1} className="text-center">
              <Time>10 ก.พ. 61 <br /> วันเปิดรับสมัคร</Time>
            </Box1>
            <Box2 box2={props.box2} borderLine2={props.border2} className="text-center">
              <Time>11 มี.ค 61 <br /> วันปิดรับสมัคร</Time>
            </Box2>
            <Box3 box3={props.box3} borderLine3={props.border3} className="text-center">
              <Time>31 มี.ค 61 <br /> วันประกาศผล</Time>
            </Box3>
            <Box4 box4={props.box4} borderLine4={props.border4} className="text-center">
              <Time>30 พ.ค - 3 มิ.ย 61 <br /> วันค่าย</Time>
            </Box4>
          </Space2>
        </div>
    </div>
      </HideMobile>
          <HideDesktop>
          <Bgbottom src="/static/image/when.png"/>
          <Moblie />
        </HideDesktop>
    </Relative>
  </Bggradient>
)

export default compose(
  withState('bg','setBg',''),
  withState('box1','setBox1',''),
  withState('box2','setBox2',''),
  withState('box3','setBox3',''),
  withState('box4','setBox4',''),
  withState('border1','setBorder1',''),
  withState('border2','setBorder2',''),
  withState('border3','setBorder3',''),
  withState('border4','setBorder4',''),
  lifecycle({
    componentDidMount() {
      let date = new Date()
      let timeline =new Intl.DateTimeFormat('th-th').format(date)
      console.log(timeline)
      switch(timeline){
        case '30/5/2561': this.props.setBox4('rgba(229, 60, 53,1)'); 
        case '31/3/2561': this.props.setBox3('rgba(229, 60, 53,1)');
        case '11/3/2561': this.props.setBox2('rgba(229, 60, 53,1)');
        case '10/2/2561': this.props.setBox1('rgba(229, 60, 53,1)'); 
      }
      switch(timeline){
        case '10/2/2561': this.props.setBorder1('.275em solid #fff'); break;
        case '11/3/2561': this.props.setBorder2('.275em solid #fff'); break;
        case '31/3/2561': this.props.setBorder3('.275em solid #fff'); break;
        case '30/5/2561': this.props.setBorder4('.275em solid #fff'); break;
      }
      let theme = window.localStorage.getItem("color")
      const whenColor = JSON.parse(theme)
      this.props.setBg(whenColor)
    }
  })
)(index)
