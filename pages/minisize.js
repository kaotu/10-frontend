import react from 'react'
import styled from 'styled-components'

const Minicon = styled.div`
  display:none;
  width:100%;
  @media(orientation:landscape)
  and (max-width:1024px){
    display:block;
  }
`

const index =()=> (
    <Minicon>
        <img className="img-fluid" src="../static/image/mini.png"/>
    </Minicon>
)
export default index