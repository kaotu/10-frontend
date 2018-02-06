import React from 'react'
import styled, { keyframes } from 'styled-components'

const Bg = styled.div`
    position: relative;
    height: 100vh;
    width: 100vw;
    top: -200vh;
`
const Cloud = styled.img`
    position : absolute;
    z-index:8;
    height : 20vh;
    bottom : 0vh;
    transform: translate(-50%, 0%);
    left: 50vw;
    @media (min-width: 412px) {
    }
    @media (min-width: 576px) {
    }
    @media (min-width: 1024px) {
        height : auto;
        width: 100vw;
    }
`
const CloudIndex = () => (
    <Bg>
        <div class="text-align:center">
            <Cloud src='/static/image/เมฆ-บน.png'/>
        </div>
    </Bg>
)
export default CloudIndex