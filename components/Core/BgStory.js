import styled from 'styled-components'

const Bg = styled.section`
  background-color:#99dede;
  ${props => props.who && `
    background-color:#d4eedc; 
  `}
  ${props => props.where && `
    background-color:#dcefdc; 
  `}
  ${props => props.when && `
    background-color:#dff1dc; 
  `}
  ${props => props.faqs && `
    background-color:#eff5dd; 
  `}
  ${props => props.contact &&`
    background-color:#eef7e9; 
  `}
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  min-height: 100vh;
`
export default Bg