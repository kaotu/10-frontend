import React from 'react'
import styled, { keyframes } from 'styled-components'

const Bg = styled.div`
    position: relative;
    height: 100vh;
    width: 100vw;
    top: -300vh;
`
const Monkey = styled.img`
    position : absolute;
    z-index:9;
    left: 5vw;
    bottom: 0vh;
    height : 60vh;
`
const Giant = styled.img`
    position : absolute;
    z-index:9;
    right: 5vw;
    bottom: 0vh;
    height : 60vh;
`

const ModelIndex = () => (
    <Bg>
        <Monkey src='/static/image/Moling.svg'/>
        <Giant src='/static/image/Moyak.svg'/>
    </Bg>
)
export default ModelIndex
