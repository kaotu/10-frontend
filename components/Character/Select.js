import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Selectling from './Selectling'
import Selectyak from './Selectyak'
import RightToLeft from '../PageTransition/RightToLeft'
import Scorebar from './Scorebar'
import Bg from '../Bg'

const Div = styled.div`
  width: 100vw;
  height: 100vh;
` 
const Fit = styled.div`
  padding-right: 0px;
  padding-left: 0px;
`
const Select = props => (

  <Bg>
    <RightToLeft check={!props.check}>
      <Scorebar/>
        <div className ="container-fluid">      
          <Div className="row">
            <Fit className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <Selectling/>      
            </Fit>
            <Fit className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <Selectyak/>
            </Fit>
          </Div>  
      </div>
      </RightToLeft>
</Bg>

)

export default Select