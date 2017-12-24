import styled , { keyframes } from 'styled-components'


const RightTo = keyframes`
    from { -webkit-transform: translateX(100%); transform: translateX(100%);}
    to { -webkit-transform: translateX(0%); transform: translateX(0%); }
`

const RightToLeft = styled.div`
    -webkit-animation: ${props => (props.check ? RightTo : '')} 1s ease-in-out both;
    animation: ${props => (props.check ? RightTo : '')} 1s ease-in-out both ;
`
export default RightToLeft