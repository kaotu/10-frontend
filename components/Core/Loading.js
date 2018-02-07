import react from 'react'
import styled, { keyframes} from 'styled-components'
import {compose, withState, lifecycle} from 'recompose'

const FadeBG = keyframes`
70%{
  opacity:1;
}
100%{
  opacity:0;
}
`
const SwapIcon = keyframes`
0%{
  opacity:1;
}
25%{
  opacity:1;
}
50%{
  opacity:0;
}
75%{
  opacity:0;
}
100%{
  opacity:1;
}
`
const LoadText = keyframes`
0%{
  font-size:1em;
}
50%{
  font-size:1.1em;
}
100%{
  font-size:1em;
}      
`
const LoadTextDestop = keyframes`
0%{
  font-size:2em;
}
50%{
  font-size:2.2em;
100%{
  font-size:2em;
} 
`
const Bg = styled.section`
  height:100%;
  width:100%;
  background: #002d40;
  z-index: 99999;
  position: fixed;
  display: block;
  transition: all 1.5s ease-in-out;

  &.hide {
    opacity: 0;
    visibility: hidden;
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
  animation: ${LoadTextDestop} 1.5s linear infinite;
  font-size: 2em;
  @media (max-width:720px) {
    margin-top:60%;
    padding-top : 10vw;
    animation: ${LoadText} 1.5s linear infinite;
  }
`

const index = ({show ,delay }) => (
  <Bg className={`d-flex justify-content-center align-items-center ${ !show ? 'hide' : ''}`}>
    <Icon src="../../static/image/hanumanscore-new-01.svg" className="d-flex "/>
    <Icon2 src="../../static/image/yakscore-new-01.svg" className="d-flex "/>
    <H1>กรุณารอ...เลือกตัวละคร</H1>
  </Bg>
)

export default compose(
  withState('show', 'setShow', true),
  lifecycle({
    componentDidMount() {
      setTimeout(() => {
        this.props.setShow(false)
      }, 2000);
    }
  })
)(index)
