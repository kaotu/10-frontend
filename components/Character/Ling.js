import React from 'react'
import styled from 'styled-components'

const Modelling = styled.img`
    width: 21.155vw;
    position: fixed;
    z-index: 0;
    display: block;
    cursor: pointer;


    @media (max-width:720px) {
        width: 43%;
    }
`

const Ling = () => (
    <Modelling src="../../static/image/Mongkey.svg"/>
)
export default Ling