import react from 'react'
import styled from 'styled-components'

const H1 = styled.h1`
  font-size: 5em;
  font-weight: bold;
  color : white;
  @media (max-width:320px) {
    font-size: 3em;
  }
  @media (max-width:420px) {
    font-size: 2em;
  }
@media (max-width:768px) {
  font-size: 3em;
}
@media (max-width:1024px) {
  font-size: 3em;
}
`

export default H1
