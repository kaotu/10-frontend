import styled, { keyframes } from 'styled-components'


const movedown = keyframes`
    from {transform: translateY(0%);}
    to {transform: translateY(-100%); }
`

const MoveDown = styled.div`
    overflow:hidden;
    animation: ${props => (props.go ? movedown : '')} 200ms ease-in-out both ;
`
export default MoveDown