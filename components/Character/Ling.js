import React from 'react'
import styled from 'styled-components'

const Modelling = styled.img`
    width: 15vw;
    position: absolute;
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