// นี่คือหน้า Home นะ
import React from 'react'
import styled from 'styled-components'
import {compose,lifecycle,withState} from 'recompose'
import link from 'react-scroll/modules/components/Link';

import BgIntro from '../Intro/BgIntro'
import Logo from './Logo'
import Mountain from './Mountain'
import Cloud from './Cloud'
import Model from './Model'

const Index = (props) => (
  <div className="row">
    <div className="col-12">
      <BgIntro theme={props.scrolld.index}>
          <Logo/>
          <Mountain/>
          <Cloud/>
          <Model/>
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
