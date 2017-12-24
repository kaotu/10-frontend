import React from 'react'
import styled from 'styled-components'


const Modelyak = styled.img`
    width: 50vw;
    position: absolute;
    z-index: 0;
    display: block;
    margin-left: 65%;
    margin-top: .2%;
    cursor: pointer;

    @media (max-width:720px) {
        width: 47%;
        margin-top: 2%;
    }
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transition: .3s ease-in-out;
    transition: .3s ease-in-out;
    &:hover{
        -webkit-transform: scale(1.3);
        transform: scale(1.3);
    }
`

const Yak = () => (
    <Modelyak src="../../static/image/Giant.svg"/>    
)

export default Yak