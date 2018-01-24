import styled from 'styled-components'

const Bg = styled.section`
  background-color: ${props => props.bgColor || '#a4b792'};
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  min-height: 100vh;
`
export default Bg