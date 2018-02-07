import react from 'react'
import styled from 'styled-components'
import {compose, withState, lifecycle} from 'recompose'

const Bg = styled.section`
  height:100%;
  width:100%;
  background: #002d40;
  z-index: 99999;
  position: fixed;
  display: ${props => props.show ? 'block' : 'none !important'};
  transition: .4s;
`
const Icon = styled.img`
  width:20%;
  position: absolute;
  @media (max-width:720px) {
    width: 50%;
  }
`

const H1 = styled.h1`
  margin-top:30%;
  color:#fff;
  @media (max-width:720px) {
    font-size: 2em;
    margin-top:60%;
  }
`

const index = ({show}) => (
  <Bg show={show} className="d-flex justify-content-center align-items-center">
    <Icon src="../../static/image/yakscore-new-01.svg" className="d-flex "/>
    <Icon src="../../static/image/hanumanscore-new-01.svg" className="d-flex "/>
    <H1>กรุณาเลือกตัวละคร</H1>
  </Bg>
)

export default compose(
  withState('show', 'setShow', true),
  lifecycle({
    componentDidMount() {
      setTimeout(() => {
        this.props.setShow(false)
      }, 1000);
    }
  })
)(index)
