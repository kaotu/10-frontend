import styled , { keyframes } from 'styled-components'
import { BaseAnimation } from 'animate-css-styled-components'

const SlideOutDownAnimation = keyframes`
    from {
      transform: translate3d(0, 0, 0);
    }

    to {
      visibility: hidden;
      transform: translate3d(-100vw, 0, 0);
    }
  `

  const SlideOutDown = styled(BaseAnimation)`
    animation-name: ${props => props.check ?SlideOutDownAnimation: ''};
  `
  export default SlideOutDown

