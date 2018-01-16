import React from 'react'
import Intro from '../components/Intro/'

import What from '../components/What/index'
import Who from '../components/Who/index'
import ITdetails from '../components/ITdetails/index'
import RegisBut from '../components/Core/RegisBut'
import GameBut from '../components/Core/GameBut'
import Navbar from '../components/Core/Navbar'

const index = () => (
	<div>
		<Navbar/>
        <GameBut/>
        <RegisBut/>        
		<section>
			<Intro />
		</section>
		<section>
        	
			<What />
		</section>
		<section>
			<Who />
		</section>
		<section>
			<ITdetails />
		</section>
	</div>
)

export default index
