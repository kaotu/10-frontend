import react from 'react'
import styled, { keyframes } from 'styled-components'
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
const SwapIcon = keyframes`
  0%{
    opacity:1;
  }
  25%{
    opacity:0;
  }
  50%{
    opacity:1;
  }
  75%{
    opacity:0;
  }
  100%{
    opacity:1;
  }
`

const Icon = styled.img`
  width:20%;
  position: absolute;
  @media (max-width:720px) {
    width: 50%;
  }
`

const Icon2 = styled.img`
  width:20%;
  position: absolute;
  animation: ${SwapIcon} 3s linear infinite;
  @media (max-width:720px) {
    width: 50%;
  }
`
const H1 = styled.h1`
  margin-top:30%;
  color:#fff;
  animation: ${SwapIcon} 1.5s linear infinite;
  @media (max-width:720px) {
    font-size: 2em;
    margin-top:60%;
  }
`

const index = ({show}) => (
  <Bg show={show} className="d-flex justify-content-center align-items-center">
    <Icon src="../../static/image/yakscore-new-01.svg" className="d-flex "/>
    <Icon2 src="../../static/image/hanumanscore-new-01.svg" className="d-flex "/>
    <H1>กรุณาเลือกตัวละคร</H1>
  </Bg>
)

export default compose(
  withState('show', 'setShow', true),
  lifecycle({
    componentDidMount() {
      setTimeout(() => {
        this.props.setShow(false)
      }, 3000);
    }
  })
)(index)
