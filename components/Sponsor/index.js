import React from 'react'
import styled from 'styled-components'
import Bg from '../Sponsor/BgSponsor'
import H1 from '../Core/FontH1'
import H2 from '../Core/FontH2'

const Relative = styled.div`
  position: relative;
  width: 100vw;
  min-height:25vh;
`
const Cloud = styled.img`
  position: absolute;
  z-index: 0;
  width: 150vw;
  top: -50vh;
  left: -25vw;
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
  <Bg>
    <Relative>
    <Cloud src='/static/image/CloudSponser.svg'/>
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
    </Relative>
  </Bg>
)
export default Index
