import React from 'react'
import styled from 'styled-components'

// import Intro from '../components/Intro/'
import What from '../components/What/index'
import Who from '../components/Who/index'
import Where from '../components/Where/index'
import When from '../components/When/index'
import GameBut from '../components/Core/GameBut'
import Navbar from '../components/Core/Navbar'
import FAQs from '../components/FAQs/index'
import Contact from '../components/Contact/index'

const Section = styled.section`
	margin-bottom:5%;
`

const index = () => (
	<div>                
		{/* <section>
			<Intro />
		</section> */}
		<Navbar/>                
		<Section>        	
			<What />
		</Section>
		<Section>
			<Who />
		</Section>
		<Section>
			<Where/>
		</Section>
		<Section>
			<When/>
		</Section>
		<Section>
			<FAQs />
		</Section>
		<Section>
			<Contact />
		</Section>
	</div>
)

export default index
