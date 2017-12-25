import styled, { keyframes } from 'styled-components'


const moveToLeft = keyframes`
    from {transform: translateX(0%);}
    to {transform: translateX(-100%); }
`

const MoveToLeft = styled.div`
    
    animation: ${props => (props.check ? moveToLeft : '')} 1s ease-in-out both ;
`
export default MoveToLeft