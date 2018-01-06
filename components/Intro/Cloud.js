import react from 'react'
import styled from 'styled-components'

const Cloud = styled.div`
    width: 20vw;
    margin-top: 10vh;
    position:absolute;
    z-index:1;
    animation: moveclouds 60s linear infinite;
    @keyframes moveclouds {
        0% {margin-left: 100vw;}
        100% {margin-left: -20vw;}
    }
`

const Index = () => (
    <div>
        <Cloud><img src="/static/image/cloud.svg"/></Cloud>
    </div>

)

export default Index