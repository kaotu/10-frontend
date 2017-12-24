import React from 'react'
import styled from 'styled-components'

const Modelling = styled.img`
    width: 38vw;
    position: absolute;
    z-index: 0;
    display: block;
    margin-left: -37%;
    margin-top: 10%;
    cursor: pointer;

    @media (max-width:720px) {
        width: 43%;
        margin-top: 8%;
    }
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transition: .3s ease-in-out;
    transition: .3s ease-in-out;
`

const Ling = () => (
    <Modelling src="../../static/image/Mongkey.svg"/>
)
export default Ling