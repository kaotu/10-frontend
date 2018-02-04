import styled from 'styled-components'

const Bg = styled.section`
  background-color: ${props => props.bgColor || ''};
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  min-height: 100vh;
  letter-spacing: 0.01357em;
  position: relative;
  overflow : hidden;
  @media (max-width:720px) {
    min-height: 100vh;
  }
  @media (max-width:420px) {
    min-height: 70vh;
  }
  @media (max-width:768px) {
    min-height: 70vh;
  }
`
export default Bg