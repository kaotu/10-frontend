import react from 'react'
import styled from 'styled-components'

const Minicon = styled.div`
  display:none;
  position:absolute;
  top:10vh;
  left:26vw;
  width:50%;
  @media(orientation:landscape)
  and (max-width:1024px){
    display:block;
  }
`

const index =()=> (
    <Minicon>
        <img className="img-fluid" src="../static/image/bg_404.png"/>
    </Minicon>
)
export default index