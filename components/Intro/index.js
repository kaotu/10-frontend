// นี่คือหน้า Home นะ
import React from 'react'
import styled from 'styled-components'
<<<<<<< HEAD

import Logo from './Logo'
import BgIntro from '../BgIntro'
import LogoSIT from './LogoSIT'
import Background from './Background'
=======
import { compose, withState } from 'recompose'
import Router from 'next/router'
import ReactTimeOut from 'react-timeout'
import BgIntro from '../BgIntro'
import LogoSIT from './LogoSIT'
import Sponsor from '../Sponsor/index'
import Background from '../Intro/Background' 
>>>>>>> 5377af81c6ab41876a35442e261c22872341fad9

const Div = styled.div`
  height: 100vh;
`

<<<<<<< HEAD
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
=======
const Index = (props) => (
  <div>
  <BgIntro>
    <div className="container-fluid">
      <div className="row">
        <Div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <Background/>
        </Div>
      </div>
    </div>
  </BgIntro>
  <Sponsor/>
  </div>
>>>>>>> 5377af81c6ab41876a35442e261c22872341fad9
)


export default Index