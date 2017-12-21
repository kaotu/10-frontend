import React from 'react'
import Link from 'next/link'
import Selectling from '../components/Character/Selectling'
import Selectyak from '../components/Character/Selectyak'
import styled from 'styled-components'
import MoveToLeft from '../components/PageTransition/MoveToLeft'

const Div = styled.div`
  width: 100vw;
  height: 100vh;
` 
const Fit = styled.div`
  padding-right: 0px;
  padding-left: 0px;
`
const Index = ()=> (
<body className="bgHome">
<MoveToLeft>
<div className ="container-fluid">      
    <Div className="row">
      <Fit className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <Selectyak/>
      </Fit>
      <Fit className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <Selectling/>      
      </Fit>
    </Div>
  
</div>
</MoveToLeft>
</body>
)

export default Index