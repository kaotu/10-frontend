import styled from 'styled-components'

const Bg = styled.section`
  background-color:#a4b792;
  ${props => props.who && `
    background-color:#ceeaa5; 
  `}
  ${props => props.where && `
    background-color:#e1f6b3; 
  `}
  ${props => props.when && `
    background-color:#def5bf; 
  `}
  ${props => props.faqs && `
    background-color:#def5bf; 
  `}
  ${props => props.contact &&`
    background-color:#e7f6da; 
  `}
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  min-height: 100vh;
  letter-spacing: 0.05em;
`
export default Bg