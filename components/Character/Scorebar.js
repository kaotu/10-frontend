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

const Scorebar = () => (
    <Head>
        <SelectChar><center>เลือกตัวละคร</center></SelectChar>
        <div className="container progress wide"> 
            <Scoreyak/>
            <Scoreling/>
        </div>
    </Head>

)
export default Scorebar