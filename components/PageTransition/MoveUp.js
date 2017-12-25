import styled, { keyframes } from 'styled-components'


const moveup = keyframes`
    from {transform: translateY(0%);}
    to {transform: translateY(100%); }
`

const MoveUp = styled.div`
    overflow:hidden;
    animation: ${props => (props.up ? moveup : '')} 200ms ease-in-out both ;
`
export default MoveUp