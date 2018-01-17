import React from 'react'
import Intro from '../components/Intro/'
import What from '../components/What/index'
import Who from '../components/Who/index'
import Where from '../components/Where/index'
import When from '../components/When/index'
import GameBut from '../components/Core/GameBut'
import Navbar from '../components/Core/Navbar'
import FAQs from '../components/FAQs/index'

const index = () => (
	<div>
		<section>
			{/* <Intro /> */}
		</section>
			<Navbar/>                
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
