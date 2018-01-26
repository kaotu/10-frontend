import React from 'react'
import styled from 'styled-components'
import H1 from '../Core/FontH1'
import H2 from '../Core/FontH2'

const Bg = styled.div`
  background-color:#DDFAFE; 
  min-height:25vw;
  position: relative;
  z-index: 4;
`
const BImg = styled.img`
  width: 30%; 
  height: 30%;
  margin-right: 1%;
  margin-left: 1%;
`
const SImg = styled.img`
  width: 25%; 
  height: 25%;
  margin-right: 1%;
  margin-left: 1%;
`

const BigSponsor = [
  { img: "/static/image/sponsor.png" },
  { img: "/static/image/sponsor.png" },
  { img: "/static/image/sponsor.png" }
]

const SmallSponsor = [
  { img: "/static/image/sponsor.png" },
  { img: "/static/image/sponsor.png" },
  { img: "/static/image/sponsor.png" },
  { img: "/static/image/sponsor.png" },
  { img: "/static/image/sponsor.png" }
]

const Topic = H1.extend`
  font-size: 3em;
`

const Index = () => (
  <Bg className="d-flex align-items-center">
    <div className="container d-flex justify-content-center">
      <div className="row">
        <div className="col-md-12 text-center">
          <Topic className="font-weight-bold">Sponsor</Topic>
          <div className="img-responsive">
            <div className="row d-flex justify-content-center">
              {
                BigSponsor.map((spon, i) => (
                  <BImg key={i} src={spon.img} />
                ))
              }
            </div>
            <div className="row d-flex justify-content-center my-4 mx-1">
              {
                SmallSponsor.map((spon, i) => (
                  <SImg key={i} src={spon.img} />
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  </Bg>
)
export default Index
