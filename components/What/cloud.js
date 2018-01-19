import React from 'react'
import styled from 'styled-components'
import Animate, {Shake} from 'animate-css-styled-components';

const Position1 = styled.div`
    width: 20%;
    position: absolute;
    z-index: 2;
    left: 30%;
    top: 30%;
` 
const Position2 = styled.div`
    width: 20%;
    position: absolute;
    z-index: 2;
    left: 55%;
    top: 20%;
` 
const Clound = () => (    
    <div>
    <Position1>
      <Animate 
        Animation={[Shake]}
        duration={["30s"]}
        delay={["0s"]}
        iterationCount={["infinite"]}>
        <img src="../../static/image/clound-yak-back.svg"/>
      </Animate>
    </Position1>
    <Position2>
      <Animate 
        Animation={[Shake]}
        duration={["30s"]}
        delay={["2.5s"]}
        iterationCount={["infinite"]}>
        <img src="../../static/image/clound-yak-back.svg"/>
      </Animate>  
    </Position2>
    </div>
)

export default Clound