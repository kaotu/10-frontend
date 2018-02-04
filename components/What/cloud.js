import React from 'react'
import styled from 'styled-components'
import Animate, { Shake } from 'animate-css-styled-components';

const Position1 = styled.div`
  width: 40%;
  position: absolute;
  z-index: 0;
  left: 20%;
  top: 30%;
`
const Position2 = styled.div`
  width:35%;
  position: absolute;
  z-index: 0;
  left: 60%;
  top: 5%;
`
const Clound = () => (
  <div>
    <Position1>
      <Animate
        Animation={[Shake]}
        duration={["30s"]}
        delay={["0s"]}
        iterationCount={["infinite"]}>
        <img src="../../static/image/clound-yak-back.svg" />
      </Animate>
    </Position1>
    <Position2>
      <Animate
        Animation={[Shake]}
        duration={["30s"]}
        delay={["2.5s"]}
        iterationCount={["infinite"]}>
        <img src="../../static/image/clound-yak-back.svg" />
      </Animate>
    </Position2>
  </div>
)

export default Clound
