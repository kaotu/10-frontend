import React from 'react'
import Intro from '../components/Intro/'

import What from '../components/What/index'
import Who from '../components/Who/index'
import Where from '../components/Where/index'
import When from '../components/When/index'
import GameBut from '../components/Core/GameBut'
import Navbar from '../components/Core/Navbar'
import Burger from '../components/Core/Burger'

const index = () => (
	<div>
		<Navbar/>
		<Burger/>                
		<section>
			{/* <Intro /> */}
		</section>
		<section>        	
			<What />
		</section>
		<section>
			<Who />
		</section>
		<section>
			<Where/>
		</section>
		<section>
			<When/>
		</section>
	</div>
)

export default index
