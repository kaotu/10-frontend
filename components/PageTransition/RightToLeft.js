import styled, { keyframes } from 'styled-components'


const RightTo = keyframes`
    from {transform: translateX(100%);}
    to {transform: translateX(0%); }
`

const RightToLeft = styled.div`
    animation: ${props => (props.check ? RightTo : '')} 1s ease-in-out both ;
`
export default RightToLeft