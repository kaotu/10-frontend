import react from 'react'
import styled from 'styled-components'

const RegisButton = styled.div`
    width: 130px;
    height: 130px;
    border: solid 1px rgb(255, 255, 255);
    border-radius: 50%;
    background-color: #EECC6B;
    transition:all 550ms ease-in-out;
    cursor: pointer;
    position : absolute;
    z-index: 1;
`

const Regis = styled.span`
    font-size: 2em;
    font-weight: bold;
`

const RegisBut = () => (
    <RegisButton className="d-flex justify-content-center align-items-center" data-toggle="" data-target="#">
        <Regis className="text-center">สมัครเลย!</Regis>
    </RegisButton>
)
export default RegisBut