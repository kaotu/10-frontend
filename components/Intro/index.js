// นี่คือหน้า Home นะ
import React from 'react'
import styled from 'styled-components'

// import Logo from './Logo'
import BgIntro from '../BgIntro'
import LogoSIT from './LogoSIT'
import Background from './Background'

const Div = styled.div`
  height: 100vh;
`

const Index = () => (
	<BgIntro>
		<div className="container-fluid">
				<div className="row">
					<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<Background />
							{/* <Logo /> */}
					</div>
				</div>
		</div>
	</BgIntro>
)


export default Index