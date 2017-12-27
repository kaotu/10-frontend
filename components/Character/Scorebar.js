import react from 'react'
import styled from 'styled-components'

import Scoreling from './Scoreling'
import Scoreyak from './Scoreyak'

const SelectChar = styled.h1`
    font-family: 'Niramit';
    color : #FFA644;
    font-size: 5em;

    @media (max-width:567px) {
        font-size: 2em;
    }

    @media (min-width:568px) {
        font-size: 3em;
    }

    @media (min-width: 960px) {
        font-size: 4em;
    }

    @media (min-width: 1140px) {
        font-size: 4em;
    }

`

const Head = styled.div`
    position: absolute;
    z-index: 1;
    width: 100%;
    margin-top: 1%;
`
const Score = styled.div`
    height: 30px;

    @media (max-width:567px) {
        font-size: 1em;
        height: 25px;
    }

    @media (min-width:568px) {
        font-size: 1em;
        height: 30px;
    }

    @media (min-width: 960px) {
        font-size: 1.4em;
        height: 30px;
    }
`

const Scorebar = () => (
    <Head>
        <div className="d-flex flex-row justify-content-center">
            <Score className="container progress wide align-self-center"> 
                <Scoreyak/>
                <Scoreling/>
            </Score>
        </div>
        <SelectChar className="d-flex justify-content-center">เลือกตัวละคร</SelectChar>
    </Head>

)
export default Scorebar