import styled, { keyframes } from 'styled-components'


const RightTo = keyframes`
    from {transform: translateX(100%);}
    to {transform: translateX(0%); }
`

const RightToLeft = styled.div`
    overflow:hidden;
    animation: ${props => (props.check ? RightTo : '')} 500ms ease-in-out both ;
`
export default RightToLeft