import react from 'react'
import styled from 'styled-components'

const H1 = styled.h1`
  font-size: 5em;
  font-weight: bold;
  color : white;
  @media (min-width:320px) {
    font-size: 3em;
  }
  @media (min-width:420px) {
    font-size: 3.5em;
  }
  @media (min-width:576px) {
    font-size: 4em;
  }
  @media (min-width:1024px) {
    font-size: 4.5em;
  }

`

export default H1
