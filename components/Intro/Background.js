import react from 'react'
import styled from 'styled-components'

const PositionMountain = styled.img `
    position:fixed;
    left:0px;
    bottom:0vh;
    height: 80vh;
    left: 40vw;
`
const PositionCloud = styled.img `
    position:fixed;
    left:0px;
    bottom:0vh;
    width:100vw;
`
const PositionStar = styled.img `
    position:fixed;
    left:0px;
    top:0vh;
    width:100vw;
`
const PositionMonkey = styled.img `
    position:fixed;
    right:0px;
    bottom:15vh;
    width:auto;
    height: 50vh;
`
const PositionGiant = styled.img `
    position:fixed;
    left:100px;
    top:10vh;
    width:auto;
    height: 50vh;
`

const Background = () => (
    <div>
        {/* <PositionStar src='/static/image/star.svg'/> */}
        <PositionMountain src='/static/image/moutain.svg'/>
        <PositionCloud src='/static/image/cloud-bottom.svg'/>
        <PositionMonkey src='/static/image/mongkey-Home.svg'/>
        <PositionGiant src='/static/image/giantwithcloud.svg'/>
        <PositionCloud src='/static/image/cloud-bottom-Front.svg'/>
    </div>
)

export default Background