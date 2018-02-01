import React from 'react'
import styled from 'styled-components'
import { withState, compose } from 'recompose'

const Img = styled.img`
    transition: .5s;
    width: ${props => props.active ? '800px' : '300px'};
`
const IconData = [
  { id: 0, image: "/static/image/edu.png" },
  { id: 1, image: "/static/image/computer.png" },
  { id: 2, image: "/static/image/Mom.png" },
  { id: 3, image: "/static/image/night.png" }
]
const Image = styled.img`
width:7vw;
transition:all 550ms ease-in-out;
transition: .5s;
width: ${props => props.active ? '8vw' : '7vw'};
@media (max-width:720px) {
width: 50%;
padding: .2em;
}
&:hover{
-moz-transform: scale(1.3);
-webkit-transform: scale(1.3);
transform: scale(1.3);
}
`

const Example = ({ clicker, setClicker }) => {
  let newClicker = clicker
  return (
    <div>
      {
        IconData.map((data, i) => (
          <div key={i} className="col-3" onClick={() => props.setCheck(data.id)}>
            <Image onClick={
              () => {
                clicker[i] = true
                setClicker(clicker)
              }
            } src={data.image} />
          </div>
        ))
      }
    </div>
  )
}

export default compose(
  withState('clicker', 'setClicker', [
    false, false, false, false
  ])
)(Example)