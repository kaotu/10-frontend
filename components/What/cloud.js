import React from 'react'
import styled from 'styled-components'
import Animate, {Shake} from 'animate-css-styled-components';

const Cloud = styled.img`
    width: 20%;
    position: absolute;
    z-index: 2;
    left: 50%;
    top: 20%;
` 
const Cloud2 = styled.img`
    width: 20%;
    position: absolute;
    z-index: 2;
    left: 35%;
    top: 30%;
` 

  const Clound = () => (    
      <Animate 
        Animation={[Shake]}
        duration={["10s"]}
        delay={["0s"]}
        iterationCount={["infinite"]}>
        <Cloud src="../../static/image/clound-yak-back.svg"/>
        <Cloud2 src="../../static/image/clound-yak-back.svg"/>
      </Animate> 
)

export default Clound