import react from 'react'
import styled from 'styled-components'

import Score from './Score'

const Barsize = styled.div`
height: 30px;

-webkit-box-shadow: 0 8px 5px rgba(0, 0, 0, 0.1);
-moz-box-shadow: 0 8px 5px rgba(0, 0, 0, 0.1);
box-shadow: 0 8px 18px rgba(0, 0, 0, 0.4);

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


const Textchoose = styled.img`
    width: 30vw;
    display: flex;
    position: absolute;
    z-index: 2;
`

const Head = styled.div`
    position: absolute;
    z-index: 1;
    width: 100%;
    margin-top: 1%;
`


const Scorebar = () => (
    <Head>
        <div className="d-flex flex-row justify-content-center">
            <Barsize className="container progress wide align-self-center"> 
                <Score/>
                <Score/> 
                {/* #FFA644 โค้ดสีของscoreยักษ์*/}
            </Barsize>
        </div>
        <article className="d-flex justify-content-center">    
            <Textchoose src="../../static/image/choose.png"/>    
        </article>
    </Head>

)
export default Scorebar