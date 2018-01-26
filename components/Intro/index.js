// นี่คือหน้า Home นะ
import React from 'react'
import styled from 'styled-components'

import Logo from './Logo'
import BgIntro from '../BgIntro'
import LogoSIT from './LogoSIT'
import Background from './Background'


const Position = styled.div`
	width: 100vw;
	margin-top: 50vh;
	transform: translate(-50%, -50%);
`

const Index = () => (
	<BgIntro>
		<div className="container-fluid">
				<div className="row">
					<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<Background />
							<Logo />
					</div>
				</div>
		</div>
	</BgIntro>
)


export default Index