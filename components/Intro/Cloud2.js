import react from 'react'
import styled from 'styled-components'

const Cloud = styled.div`
    width: 25vw;
    margin-top: 15vh;
    position:absolute;
    z-index:2;
    opacity: 10;
    animation: moveclouds 23s linear infinite;
    @keyframes moveclouds {
        0% {margin-left: 100vw;}
        100% {margin-left: -25vw;}
    }
`

const Index = () => (
    <div>
        <Cloud><img src="/static/image/cloud.svg"/></Cloud>
    </div>

)

export default Index