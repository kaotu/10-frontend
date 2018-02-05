import react from 'react'
import styled from 'styled-components'

const Bg = styled.section`
  height:100%;
  width:100%;
  background:#002d40;
  z-index:9999999999999999999;
  position:absolute;
`
const IconYak = styled.img`
  display:block;
  margin-left: auto;
  margin-right: auto;
  width:20%;
  margin-top:33vh;
`




const index = () => (
  <Bg>
    <IconYak src="../../static/image/yakscore-new-01.svg"/>
  </Bg>
)

export default index