// นี่คือหน้า Home นะ
import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Logo from './Logo'
import Button from './Button'
import Bg from '../Bg'



const Index = () => (
	<div className="container-fluid" >
		<div className="row">
			<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
				<center><Logo /></center>
				<center><Link href="/character"><a><Button style={{ width: '7%', marginTop: '1%' }}>ถัดไป</Button></a></Link></center>
			</div>			
		</div></div>
)
export default Index