import React from 'react'
import styled from 'styled-components'


const Modelyak = styled.img`
    width: 55%;
    position: absolute;
    z-index: 1;
    display: block;
    margin-left: 45%;
    margin-top: 17%;
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
    <img src="../../static/image/yak.svg" style={{width:'18vw',margin:'0%',marginTop:'-13%',marginLeft:'75%'}}/>    
)

export default Yak