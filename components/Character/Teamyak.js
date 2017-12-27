import React from 'react'
import styled from 'styled-components'

const Textyak = styled.img`
    width: 19vw;
    display: flex;
    position: absolute;
    z-index: 2;
    margin-top: 30%;
    margin-left: 10%;
`

const Teamyak = () => (
    <Textyak src="../../static/image/teamyak.svg"/>    
)

export default Teamyak