// นี่คือหน้า Home นะ
import React from 'react'
import styled from 'styled-components'

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
`
const Index = (props) => (
  <div>
      <BgIntro>
        <div className="container-fluid">
          <div className="row">
            <Div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <Background/>
              <Scroll>เลื่อนลงข้างล่าง</Scroll>
							<Scrolldown src='/static/image/ScrollDown.png'/>
            </Div>
          </div>
        </div>
      </BgIntro>
  </div>
)


export default Index
