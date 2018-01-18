import React from 'react'
// import Intro from '../components/Intro/'

import What from '../components/What/index'
import Who from '../components/Who/index'
import Where from '../components/Where/index'
import When from '../components/When/index'
import GameBut from '../components/Core/GameBut'
import Navbar from '../components/Core/Navbar'
import FAQs from '../components/FAQs/index'
import Contact from '../components/Contact/index'

const index = () => (
	<div>
		<Navbar/>                
		{/* <section>
			<Intro />
		</section> */}
		<section>        	
			<What />
		</section>
		<section>
			<Who />
		</section>
		<section>
			<When/>
		</section>
		<section>
			<Where/>
		</section>
		<section>
			<FAQs />
		</section>
		<section>
			<Contact />
		</section>
	</div>
)

export default index
