import React from 'react'
import styled from 'styled-components'


const Modelyak = styled.img`
    width: 17.35vw;
    position: absolute;
    z-index: 0;
    display: block;
    cursor: pointer;

    @media (max-width:720px) {
        width: 47%;
    }
`

const Yak = () => (
    <Modelyak src="../../static/image/Giant.svg" className=""/>    
)

export default Yak