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
import Navbar from '../components/Core/Navbar'
import Sponsor from '../components/Sponsor/index'
import styled from 'styled-components'

const Relative = styled.div`
	position: relative;
`

const Bglight = styled.img`
  position : absolute;
  z-index : 0;
  height: 400vh;
  bottom : 3.5vh;
  left:24vw;
`

injectGlobal

const index = () => (
	<Scroll>
		<Relative>		
		<section id="home">
			<Intro />
		</section>
		<section id="sponsor">
			<Sponsor />
		</section>
		<Navbar />
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
			<Bglight src = '/static/image/light.svg'/>
		</section>
		</Relative>
	</Scroll>
)

export default index
