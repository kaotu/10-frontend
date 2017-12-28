import react from 'react'
import styled from 'styled-components'
import '../global-style'

const RegisButton = styled.div`
    width: 110px;
    height: 110px;
    border: solid 1px rgb(255, 255, 255);
    border-radius: 50%;
    background-color: #EECC6B;
    transition:all 550ms ease-in-out;
    cursor: pointer;
    position : absolute;
    z-index: 1;

    @media(max-width:720px) {
        width: 65px;            
        height: 65px;            
    }

`

const Regis = styled.span`
    font-size: 1.5em;
    font-weight: bold;
    font-family: 'Niramit';

    @media(max-width:720px) {
        font-size: 1em;            
    }
`

const RegisBut = () => (
    <RegisButton className="d-flex justify-content-center align-items-center" data-toggle="" data-target="#">
        <Regis className="text-center">สมัครเลย!</Regis>
    </RegisButton>
)
export default RegisBut