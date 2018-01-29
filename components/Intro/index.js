// นี่คือหน้า Home นะ
import React from 'react'
import styled from 'styled-components'


import BgIntro from '../Intro/BgIntro'
import LogoSIT from './LogoSIT'
import Background from './Background'

const Div = styled.div`
  height: 100vh;
`

const Index = (props) => (
  <div>
      <BgIntro>
        <div className="container-fluid">
          <div className="row">
            <Div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <Background/>
            </Div>
          </div>
        </div>
      </BgIntro>
  </div>
)


export default Index
