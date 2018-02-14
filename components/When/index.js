import react from 'react'
import Bg from '../Core/BgStory'
import styled from 'styled-components'
import H1 from '../Core/FontH1'
import H2 from '../Core/FontH2'
import Moblie from '../When/moblie'
import Color from '../Core/Color'
import {compose, lifecycle, withState} from 'recompose'
import moment from 'moment'

const Relative = styled.div`
  position: relative;
  height : 110vh;
  @media (max-width : 768px)
  and (min-height : 1024px) {
    height : 55vh;
  }
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
  width: 100vw;
  position:absolute;
  top: 18em;
  left: 10em;   
  z-index:2;
  background-color:tranparent;
  padding:.5em 5em;
  @media (min-width: 768px) {
    position:absolute;
    min-width:10vw;
    top: 10em;
    left: 2em;
    padding:.5em 1.5em;
  }
  @media (min-width: 1024px) {
    top: 22em;
    left: 9em; 
    padding:.5em 3em;
  }
`
const Box2 = styled.div`
  position:absolute;
  width: 100vw;
  top: 20em;
  left: 25em;    
  z-index:2;
  background-color:tranparent;
  padding:.5em 5em;
  @media (min-width: 768px) {
    position:absolute;
    min-width:10vw;
    top: 13em;
    left: 14em;
    padding:.5em 1.5em;
  }
  @media (min-width: 1024px) {
    top: 22em;
    left: 25em; 
    padding:.5em 3em;
  }
`
const Box3 = styled.div`
  position:absolute;
  width: 100vw;
  top: 22em;
  left:40em;  
  z-index:2;
  background-color:tranparent;
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
  width: 100vw;
  top: 20em;
  left:55em;   
  z-index:2;
  background-color:tranparent;
  padding:.3em 3em;
  @media (min-width: 768px) {
    position:absolute;
    min-width:10vw;
    top: 25em;
    left: 33em;
    padding:.5em 1.5em;
  }
  @media (min-width: 1024px) {
    top: 22em;
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
  margin-top: 15%;
  margin-bottom: 10%;
  @media (min-width:412px) {
    margin-top: 15%;
  }
  @media (min-width:768px) {
    margin-top: 15%;
  }
`
const Space2 = styled.div`
  position: absolute;
`
const Time = styled.p`
  display:block;
  color:#fff;
  text-align: left;
`
const Bgtop = styled.img`
position: absolute;
top: 0vh;
width : 100.6%;
margin-top : -1;
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
@media (min-width:768px) {
  margin-top : 2%;
}
`
const Zindex = styled.div`
  z-index : 1;
`
const IconTimeline1 = styled.img`
  position:absolute;
  width:5vw;
  left:-2vw;
  top:0vw;
`
const IconTimeline2 = styled.img`
  position:absolute;
  width:5vw;
  left:-2vw;
  top:0vw;
`
const IconTimeline3 = styled.img`
  position:absolute;
  width:5vw;
  left:-2vw;
  top:0vw;
`
const IconTimeline4 = styled.img`
  position:absolute;
  width:5vw;
  left:-2vw;
  top:0vw;
`
const Bggradient = styled.div`
background: ${props => props.themeColor || ''};
`
const IMGmonkey = styled.img`
  width:15%;
  margin-left:2vw;
  margin-top:17vh;
  visibility: ${props => props.hide || 'hidden'}
`
const SPACE3 = styled.div`
  position:absolute;
  bottom:3em;
`

const checkTime = (date) => moment().isAfter(date)

const index = props => (
  <Bggradient themeColor={props.color.when} className="">
    <Relative>
    <Bgtop src = '/static/image/topwhen.png'/>
    <HideMobile><Bgbottom src = '/static/image/bottomwhen.png'/></HideMobile>
      <HideMobile>
    <div className="container">
        <div className="row">
          <Space className="col-12 col-sm-12 col-md-6 ">
            <Head>
              <H1 className="text-center">WHEN</H1>
              <H2 className="text-center">ค่ายนี้จัดเมื่อไหร่ ?</H2>
            </Head>
          </Space>
          <Space2 className="col-12 col-sm-12 col-md-12  ">
            <Box1  className="text-center">
              <IconTimeline1 src={checkTime('2018-02-10') ? props.color.iconl : props.color.icontran}/>
              <Time>10 ก.พ. 61 <br /> เปิดรับสมัคร</Time>
            </Box1>
            <Box2  className="text-center">
            <IconTimeline2 src={checkTime('2018-03-11') ? props.color.iconl : props.color.icontran}/>
              <Time>11 มี.ค. 61 <br /> ปิดรับสมัคร</Time>
            </Box2>
            <Box3  className="text-center">
            <IconTimeline3 src={checkTime('2018-03-31') ? props.color.iconl : props.color.icontran}/>
              <Time>31 มี.ค. 61 <br /> ประกาศผล</Time>
            </Box3>
            <Box4 className="text-center">
            <IconTimeline4 src={checkTime('2018-05-30') ? props.color.iconl : props.color.icontran}/>
              <Time>30 พ.ค. - 3 มิ.ย. 61 <br /> เปิดค่าย</Time>
            </Box4>
          </Space2>
          <SPACE3 className ="col-12 col-sm-12 col-md-12">
            <IMGmonkey hide={'visibility'} src ={props.color.model1}></IMGmonkey>
            <IMGmonkey hide={props.hide1} src ={props.color.model2}></IMGmonkey>
            <IMGmonkey hide={props.hide2} src ={props.color.model3}></IMGmonkey>
            <IMGmonkey hide={props.hide3} src ={props.color.model4}></IMGmonkey>
          </SPACE3>
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
  withState('hide1','setHide1','hidden'),
  withState('hide2','setHide2','hidden'),
  withState('hide3','setHide3','hidden'),
  lifecycle({
    componentDidMount() {
        if(moment().isAfter('2018-03-11')){
          this.props.setHide1('visibility')
        }
        if(moment().isAfter('2018-03-31')){
          this.props.setHide2('visibility')
        }
        if(moment().isAfter('2018-05-30')){
          this.props.setHide3('visibility')
        }
    }
  })
)(index)
