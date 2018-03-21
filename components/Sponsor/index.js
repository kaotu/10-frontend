import React from 'react'
import styled from 'styled-components'
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
height: auto;
  width: 35%; 
  margin-right: 1%;
  margin-left: 1%;
  @media (max-width: 720px){
    width: 70%;
  }
`
const CamphubImg = styled.img`
height: auto;
  width: 15%; 
  margin-right: 1%;
  margin-left: 1%;
  @media (max-width: 720px){
    width: 40%;
  }
`
const ThaibevImg = styled.img`
height: auto;
  width: 13%; 
  margin-right: 1%;
  margin-left: 1%;
  @media (max-width: 720px){
    width: 35%;
  }
`
const Gable = styled.img`
  height: auto;
  width: 13%; 
  margin-right: 1%;
  margin-left: 1%;
  @media (max-width: 720px){
    width: 35%;
  }
`
const Lactasoy = styled.img`
  height:auto;
  width: 13%;
  margin-right; 1%;
  margin-left: 1%;
  @media (max-width: 720px){
    width:35%;
  }
`

const SImg = styled.img`
  width: 70%;
  margin-right: 1%;
  margin-left: 1%;
`

const BigSponsor = [
  { img: "" },
  { img: "" },
  { img: "" }
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

const Bg = styled.div `
  background-color: white;
  min-height: 50vh;
  @media (max-width: 1365px){
    min-height: 20vh;
  }
`
const Row = styled.div`
  margin-top: 10%;
  padding: 5vh;
`



const Index = props => (
  <Bg className="d-flex">
    <Relative className="d-flex align-items-center">
      <Cloud src='/static/image/เมฆ-ล่าง.png' />
      <DivSponsor className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="img-responsive">
              <Row className="row d-flex justify-content-center align-items-center">
                  <BImg src="/static/image/sponsor/bangmod.png" className="pb-2 d-flex justify-content-center"  />
                  <CamphubImg src="/static/image/sponsor/Camphub.png" className="pb-2 d-flex justify-content-center"  />
                  <ThaibevImg src="/static/image/sponsor/ThaiBev.png" className="pb-2 d-flex justify-content-center"  />
                  <Gable src="/static/image/sponsor/gable.png" className="pb-2 d-flex justify-content-center"  />
                  <Lactasoy src="/static/image/sponsor/lactasoy.png" className="pb-2 d-flex justify-content-center" />
              </Row>
              {/* <div className="row d-flex justify-content-center">
                {
                  SmallSponsor.map((spon, i) => (
                    <div className="col-6 col-md-4 col-lg-4">
                      <SImg key={i} src={spon.img} className="pb-2" />
                    </div>
                  ))
                }
              </div> */}
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
