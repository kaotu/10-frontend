import styled , { keyframes } from 'styled-components'

const moveToLeft = keyframes`
    from { -webkit-transform: translateX(100%); transform: translateX(100%);}
    to { -webkit-transform: translateX(0%); transform: translateX(0%); }
`

const MoveToLeft = styled.div`
    -webkit-animation: ${moveToLeft} 1s ease-in-out both;
    animation: ${moveToLeft} 1s ease-in-out both ;
`
export default MoveToLeft