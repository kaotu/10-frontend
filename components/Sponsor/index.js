import React from 'react'
import styled from 'styled-components'
import Bg from '../Sponsor/BgSponsor'
import H1 from '../Core/FontH1'
import H2 from '../Core/FontH2'
import {compose,lifecycle,withState} from 'recompose'

const Relative = styled.div`
  position: relative;
  width: 100vw;
`
const Cloud = styled.img`
  position: absolute;
  z-index: 0;
  width: 100vw;
  top: 0vh;
  left: 0vw;
  @media(max-width:720px){

  }
`
const DivSponsor = styled.div`
  position: relative;
  width: 100vw;
`
const BImg = styled.img`
  width: 90%;
  margin-right: 1%;
  margin-left: 1%;
`
const SImg = styled.img`
  width: 70%;
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

const Index = props => (
  <Bg bg={props.check.sponsor} className="d-flex">
    <Relative className="d-flex align-items-center">
      <Cloud src='/static/image/เมฆ-ล่าง.png' />
      <DivSponsor className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="img-responsive">
              <div className="row d-flex justify-content-center">
                {
                  BigSponsor.map((spon, i) => (
                    <div className="col-6 col-md-4 col-lg-4">
                      <BImg key={i} src={spon.img} className="pb-2" />
                    </div>
                  ))
                }
              </div>
              <div className="row d-flex justify-content-center">
                {
                  SmallSponsor.map((spon, i) => (
                    <div className="col-6 col-md-4 col-lg-4">
                      <SImg key={i} src={spon.img} className="pb-2" />
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </DivSponsor>
    </Relative>
  </Bg>
)
export default compose(
  withState('check','setCheck',''),
  lifecycle({
    componentDidMount() {
      let color = JSON.parse(window.localStorage.getItem("color"))
      this.props.setCheck(color)
    }
    
  })
)(Index)
