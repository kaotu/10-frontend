import styled from 'styled-components'

const Bg = styled.section`
  background: ${props => props.theme || ''};
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  height: 100vh;

`
export default Bg
