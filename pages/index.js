import React from 'react'
import Intro from '../components/Intro/'

import What from '../components/What/index'
import Who from '../components/Who/index'
import Where from '../components/Where/index'
import When from '../components/When/index'
import Faqs from '../components/FAQs'
import Contact from '../components/Contact'
import GameBut from '../components/Core/GameBut'
import Navbar from '../components/Core/Navbar'

const index = () => (
	<div>
		<Navbar/>
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
		<section>
			<Faqs/>
		</section>
		<section>
			<Contact/>
		</section>
	</div>
)

export default index
