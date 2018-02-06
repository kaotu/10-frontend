import react from 'react'
import styled from 'styled-components'

const H2 = styled.h2`
    font-size: 2em;
    font-weight: bold;
    color : white;
    @media (min-width:320px) {
        font-size: 1em;
    }
    @media (min-width:420px) {
        font-size: 1.1em;
    }
    @media (min-width:576px) {
        font-size: 1.2em;
    }
    @media (min-width:768px) {
        font-size: 1.3em;
    }
    @media (min-width:1024px) {
        font-size: 1.5em;
    }
`

export default H2

