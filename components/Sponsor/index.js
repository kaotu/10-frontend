import React from 'react'
import styled from 'styled-components'
import H1 from '../Core/FontH1'
import H2 from '../Core/FontH2'

const Bg = styled.div`
  background-color:#e1f6b3; 
  min-height:25vw;
`
const Img = styled.img`
  width: 100%; 
`
const Topic = H1.extend`
  font-size: 3em;
`

const Index = () => (
  <Bg className="d-flex align-items-center">
    <div className="container-fluid d-flex justify-content-center">
      <div className="row">
        <div className="col-md-12 text-center">
          <Topic className="font-weight-bold">Sponsor</Topic>
          <div className="img-responsive">
            <Img src="/static/image/sponsor.png"/>
          </div>
        </div>
      </div>
    </div>
  </Bg>
)
export default Index
