import react from 'react'
import styled from 'styled-components'

import Scoreling from './Scoreling'
import Scoreyak from './Scoreyak'

const SelectChar = styled.h1`
    font-family: "Niramit";
    color : #FFA644;
`

const Head = styled.div`
    position: absolute;
    z-index: 1;
    width: 100%;
    margin-top: 1%;
`

const ImgL = styled.img`
    width: 500px;
    height: 80%;
    display: flex;
    position: absolute;
    margin-left: 4.5%;
    margin-top: -1.5%;
    ${props => props.primary && `
        margin-left: 56%;
        margin-top: -1.5%;
    `}

    @media (max-width:720px) {
        width: 200px;
        height: 50%;
        margin-left: 0.5%;
        margin-top: -2%;
        ${props => props.primary && `
            margin-left: 46.5%;
            margin-top: -2%;
    `}    
    }

    @media (max-width:400px) {
        width: 200px;
        height: 50%;
        margin-left: 0.5%;
        margin-top: -2%;
        ${props => props.primary && `
            margin-left: 46.5%;
            margin-top: -2%;
    `}    
    }
`

const Scorebar = () => (
    <Head>
        <SelectChar><center>เลือกตัวละคร</center></SelectChar>
        <ImgL src="/static/image/hanumanscore-01.svg"/>
        <ImgL primary src="/static/image/yakscore-01.svg"/>
        <div className="container progress wide"> 
            <Scoreyak/>
            <Scoreling/>
        </div>
    </Head>

)
export default Scorebar