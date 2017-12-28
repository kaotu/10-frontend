// นี่คือหน้า Home นะ
import React from 'react'
import styled from 'styled-components'
import { compose, withState } from 'recompose'
import Router from 'next/router'
import ReactTimeOut from 'react-timeout'

import MoveLeft from '../PageTransition/MoveLeft'
import MoveToLeft from '../PageTransition/MoveToLeft'
import Logo from './Logo'
import Button from './Button'
import BgIntro from '../BgIntro'
import Cloud from './Cloud'

const state = withState('check', 'setCheck', false)

const setCheck = (callback, data) => {
	callback(!data)
	setTimeout(() => Router.push('/character'), 1000)
}

const Index = (props) => (
	<BgIntro>
		<div className="container-fluid">
			<MoveLeft check={props.check}>
			  <Cloud/><Cloud/>
				<div className="row">
					<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<center><Logo /></center>
						<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
							<a className="d-flex justify-content-center">
								<Button onClick={() => setCheck(props.setCheck, props.check)}>
									ไปผจญภัยกัน!
								</Button>
							</a>
						</div>
					</div>
				</div>
			</MoveLeft>
		</div>
	</BgIntro>
)

const Indexcompose = compose(state)(Index)

export default Indexcompose