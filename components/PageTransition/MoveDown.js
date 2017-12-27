import styled , { keyframes } from 'styled-components'
import { BaseAnimation } from 'animate-css-styled-components'

const SlideOutDownAnimation = keyframes`
    from {
      transform: translate3d(0, 0, 0);
    }

    to {
      visibility: hidden;
      transform: translate3d(0,-100vh, 0);
    }
  `

  const SlideOutDown = styled(BaseAnimation)`
    animation-name: ${ props => props.go ? SlideOutDownAnimation: ''}
  `
  export default SlideOutDown

