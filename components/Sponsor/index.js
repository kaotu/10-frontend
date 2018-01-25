import React from 'react'
import styled from 'styled-components'
import H1 from '../Core/FontH1'
import H2 from '../Core/FontH2'

const Bg = styled.div`
    background-color:#e1f6b3; 
    height:25vw;
`
const Index = () => (
  <Bg>
    <div className="container-fluid d-flex justify-content-center">
      <div className="row">
        <div className="col-md-12 text-center">
          <H1>Sponsor</H1>
          <H2 className="font-weight-bold">ยังไม่มีจ้า</H2>
        </div>
      </div>
    </div>
  </Bg>
)
export default Index