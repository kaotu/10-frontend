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
import Background from './Background'

const state = withState('check', 'setCheck', false)

const setCheck = (callback, data) => {
	callback(!data)
	setTimeout(() => Router.push('/character'), 1000)
}
const Position = styled.div`
	width: 100vw;
	margin-top: 50vh;
	position: relative;
	left: 50vw;
	transform: translate(-50%, -50%);
`

const Index = (props) => (
	<BgIntro>
		<div className="container-fluid">
			<MoveLeft check={props.check}>
			  <Cloud/><Cloud/>
				<div className="row">
					<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<Background/>
						<Position>
							<Logo />
							<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<a className="d-flex justify-content-center">
									<Button onClick={() => setCheck(props.setCheck, props.check)}>
										ไปผจญภัยกัน!
								</Button>
								</a>
							</div>
						</Position>
						
					</div>
				</div>
			</MoveLeft>
		</div>
	</BgIntro>
)

const Indexcompose = compose(state)(Index)

export default Indexcompose