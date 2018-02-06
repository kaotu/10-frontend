import react from 'react'
import styled from 'styled-components'

const Bg = styled.section`
    background: ${props => props.bg || ''} ;
    height: 55vh;
    overflow : hidden;
    z-index:2;
    position:relative;
`
export default Bg