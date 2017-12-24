import styled , { keyframes } from 'styled-components'


const moveToLeft = keyframes`
    from { -webkit-transform: translateX(0%); transform: translateX(0%);}
    to { -webkit-transform: translateX(-100%); transform: translateX(-100%); }
`

const MoveToLeft = styled.div`
    -webkit-animation: ${props => (props.check ? moveToLeft : '')} 3s ease-in-out both;
    animation: ${props => (props.check ? moveToLeft : '')} 3s ease-in-out both ;
`
export default MoveToLeft