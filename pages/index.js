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
  height: 315vh;
  bottom : 3.5vh;
  left:30vw;
`

injectGlobal

const index = () => (
	<Scroll>
		<Relative >		
		<section id="home" name="home">
			<Intro />
			<Sponsor />
		</section>
		<Navbar id="navbar-desktop"/>
		<div data-spy="scroll" data-target="#navbar-desktop" data-offset="0" id="containerElement">
			<section id="what" name="what">
				<What />
			</section>
			<section id="who" name="who">
				<Who />
			</section>
			<section id="where" name="where">
				<Where />
			</section>
			<section id="when" name="when">
				<When />
			</section>
			<section id="faqs" name="faqs">
				<Faqs />
			</section>
			<section id="contact" name="contact" className="element">
				<Contact />
				<Bglight src = '/static/image/light.svg'/>
			</section>
		</div>
		</Relative>
	</Scroll>
)

export default index
