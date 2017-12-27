import React from 'react'
import styled from 'styled-components'

const Textchoose = styled.img`
    width: 20vw;
    display: flex;
    position: absolute;
    z-index: 2;
`

const Choose = () => (
    <Textchoose src="../../static/image/choose.svg"/>    
)

export default Choose