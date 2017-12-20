// นี่คือหน้า Home นะ
import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Logo from '../components/Intro/Logo'
import Button from '../components/Intro/Button'



const Index = () => (
	<body className="bgHome">
	<div className ="container-fluid" >      
    <div className="row">
	<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
		<center><Logo/></center>		
		<center><Link href="/character"><a><Button style={{width:'15%',marginTop:'1%'}}>ไปผจญภัยกัน!</Button></a></Link></center>
    </div>
	</div></div>
	</body>
	
)
export default Index
