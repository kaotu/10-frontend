// นี่คือหน้า Home นะ
import React from 'react'
import styled from 'styled-components'
import {compose,lifecycle,withState} from 'recompose'

import BgIntro from '../Intro/BgIntro'
import Logo from './Logo'
import Mountain from './Mountain'
import Cloud from './Cloud'

const Div = styled.div`
  height: 100vh;
  width : 100vw;
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
  z-index:10;
  color:#000;
  bottom:0vh;
`
const Scrollpic = styled.img`
  cursor:pointer;
  width:3%;
  margin-top:25em;
`
const Index = (props) => (
  <div className="row">
    <div className="col-12">
      <BgIntro>
          <Logo/>
          <Mountain/>
          <Cloud/>
      </BgIntro>
    </div>
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
