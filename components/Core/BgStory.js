import styled from 'styled-components'

const Bg = styled.section`
  background-color:#96cbdb;
  ${props => props.who && `
    background-color:#9addde; 
  `}
  ${props => props.where && `
    background-color:#ade6df; 
  `}
  ${props => props.when && `
    background-color:#d5eff2; 
  `}
  ${props => props.faqs && `
    background-color:#d9f1f2; 
  `}
  ${props => props.contact &&`
    background-color:#e7f6fa; 
  `}
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  min-height: 100vh;
  letter-spacing: 0.05em;
`
export default Bg