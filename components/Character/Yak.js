import React from 'react'
import styled from 'styled-components'


const Modelyak = styled.img`
    width: 17.35vw;
    z-index: 0;
    position: absolute;
    cursor: pointer;

    @media (max-width:720px) {
        width: 47%;
    }
`

const Yak = () => (
    <Modelyak src="../../static/image/Giant.svg"/>    
)

export default Yak