// นี่คือหน้า Home นะ
import React from 'react'
import styled from 'styled-components'
import {compose,lifecycle,withState} from 'recompose'

import BgIntro from '../Intro/BgIntro'
import LogoSIT from './LogoSIT'
import Background from './Background'


const Div = styled.div`
  height: 100vh;
`

const Scrolldown = styled.img`
    position:absolute;
    z-index: 7;
    width:3vw;
    bottom:5vh;
    left:48vw;
    animation: Dukdik 1s linear infinite;
    @keyframes Dukdik {
      0% {
        bottom:5vh;
      }
      50% {
        bottom:7vh;
      }
      100% {
        bottom:5vh;
      }
    }
`
const Scroll = styled.h4`
  position:absolute;
  margin-top:40%;
  margin-left:43.5%;
  z-index:2561;
  color:#000;
  bottom:0vh;
  text-align:center;
  @media (max-width: 720px) {
    margin-left:38%;
  }
`
const Index = (props) => (
  <div>
      <BgIntro>
        <div className="container-fluid">
          <div className="row">
            <Div className="col-12 text-center">
              <img style={{width: '40%', marginTop: '5em'}} src="/static/image/logofinals.svg" alt="WIP Camp #10" />
              <br />
              <img style={{width: '20%'}} src='/static/image/LogoSIT.png'alt="WIP Camp #10,คณะเทคโนโลยีสารสนเทศ,มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี" />
              <br />
							<img  style={{ width: '3%' ,marginTop : '20em'}} src={props.scrolld.scroll}/>
              <h4>เลื่อนลงข้างล่าง</h4>
            </Div>
          </div>
          
          <Background/>
        </div>
      </BgIntro>
  </div>
)


export default compose(
  withState('scrolld','setScrolld',''),
  lifecycle({
    componentDidMount() {
      let theme = JSON.parse(window.localStorage.getItem("color"))
      this.props.setScrolld(theme)
    }
    
  })
)(Index)
