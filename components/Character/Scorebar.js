import react from 'react'
import styled from 'styled-components'

import Scoreling from './Scoreling'
import Scoreyak from './Scoreyak'

const SelectChar = styled.h1`
    font-family: 'Niramit';
    color : #FFA644;
`

const Head = styled.div`
    position: absolute;
    z-index: 1;
    width: 100%;
    margin-top: 1%;
`
const Score = styled.div`
    height: 30px;
`

const ImgL = styled.img`
    width: 10%;
    height: 10%;
    }
`

const Scorebar = () => (
    <Head>
        <SelectChar className="d-flex justify-content-center">เลือกตัวละคร</SelectChar>
        <div className="d-flex flex-row justify-content-center">
            <Score className="container progress wide align-self-center"> 
                <Scoreyak/>
                <Scoreling/>
            </Score>
        </div>
    </Head>

)
export default Scorebar