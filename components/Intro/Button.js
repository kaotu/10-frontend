
import styled from 'styled-components'
import '../global-style'

const Button = styled.button`
    font-family: 'Niramit';
    border: 0.2vw solid currentColor;
    border-radius: 3rem;
    color: #FFA644;
    font-size: 2em;
    overflow: hidden;
    padding: 0.5em 0.1em;
    position: relative;
    text-decoration: none;
    transition:all 350ms ease-in-out;
    box-shadow:  0.3vw 0.9vh #999 ;
    color : white;
    transition: .2s transform ease-in-out;
    z-index: 0;
    background-color: transparent;
    cursor: pointer;
    width: 15%;
    margin-top: 1%;

    &:hover{
        border: 0.2vw solid transparent;
        color: #002d40;
        transform: scale(1.05);
        background-color:#FFA644;
        ;
        
    }
`
export default Button