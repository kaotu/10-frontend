import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import Selectling from '../components/Character/Selectling'
import Selectyak from '../components/Character/Selectyak'
import MoveToLeft from '../components/PageTransition/MoveToLeft'
import Scorebar from '../components/Character/Scorebar'

const Div = styled.div`
  width: 100vw;
  height: 100vh;
` 
const Fit = styled.div`
  padding-right: 0px;
  padding-left: 0px;
`
const Index = ()=> (
  // <body className="bgHome">
  <div>
    <MoveToLeft>
    <Scorebar/>
      <div className ="container-fluid">      
          <Div className="row">
            <Fit className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <Selectling/>      
            </Fit>
            <Fit className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <Selectyak/>
            </Fit>
          </Div>  
      </div>
    </MoveToLeft>
  {/* // </body> */}
  </div>
)

export default Index