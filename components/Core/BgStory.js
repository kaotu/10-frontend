import styled from 'styled-components'

const Bg = styled.section`
  background-color: ${props => props.bgColor || ''};
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: auto;
  background-size: cover;
  letter-spacing: 0.01357em;
  position: relative;
  
`
export default Bg