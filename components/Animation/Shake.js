import React from 'react'
import styled from 'styled-components'
import Yak from '../Character/Yak'
import Animate, {Pulse} from 'animate-css-styled-components';


  const Shake = () => (    
      <Animate 
        Animation={[Pulse]}
        duration={["1.5s"]}
        delay={["2s"]}
        iterationCount={["infinite"]}>
        <Yak/>
      </Animate> 
)

export default Shake