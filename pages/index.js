import React from 'react'
import Intro from '../components/Intro/'
import injectGlobal from '../components/global-style'

import Scroll from '../components/Core/Scroll'
import What from '../components/What/index'
import Who from '../components/Who/index'
import Where from '../components/Where/index'
import When from '../components/When/index'
import Faqs from '../components/FAQs'
import Contact from '../components/Contact'
import GameBut from '../components/Core/GameBut'
import Navbar from '../components/Core/Navbar'

injectGlobal

const index = () => (
	<Scroll>		
		<section id="home">
			<Intro />
		</section>
		<Navbar />
		<GameBut/>
		<section id="what">
			<What />
		</section>
		<section id="who">
			<Who />
		</section>
		<section id="where">
			<Where />
		</section>
		<section id="when">
			<When />
		</section>
		<section id="faqs">
			<Faqs />
		</section>
		<section id="contact">
			<Contact />
		</section>
	</Scroll>
)

export default index
