import React from 'react'
import styled from 'styled-components'

const Modelling = styled.img`
    width: 50%;
    position: absolute;
    z-index: 0;
    display: block;
    margin-left: 3.5%;
    margin-top: 9%;

    @media (max-width:720px) {
        width: 43%;
        margin-top: 8%;
    }
`

const Ling = () => (
    <img src="../../static/image/hanuman.svg"style={{width:'20vw',margin:'0%',marginTop:'-22%',marginLeft:'10%'}}/>
)
export default Ling