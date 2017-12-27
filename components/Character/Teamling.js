import React from 'react'
import styled from 'styled-components'

const Textling = styled.img`
    width: 15vw;
    display: flex;
    position: absolute;
    z-index: 2;
    margin-top: 30%;
    margin-left: 50%;
`

const Teamling = () => (
    <Textling src="../../static/image/teamling.svg"/>    
)

export default Teamling