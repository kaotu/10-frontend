import styled, { keyframes } from 'styled-components'


const moveToLeft = keyframes`
    
    from {transform: translateX(0%);}
    to {transform: translateX(-100%); }
`

const MoveToLeft = styled.div`
    overflow:hidden;
    animation: ${props => (props.check ? moveToLeft : '')} 500ms ease-in-out both ;
`
export default MoveToLeft