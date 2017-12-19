import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Button = styled.button`
	border-radius: 3px;
	padding: 0.25em 1em;
	background: #FFA644;
	color: white;
	border: 2px solid  #FFA644;
`;


const Index = () => (
	<div className ="container-fluid" >      
    <div className="row">
	<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
		<center><img src="../static/image/Logo WIP Camp 10 SVG.svg"  style={{width:'50%',marginTop:'15%'}} className="img-center"/></center>		
		<center><Link href="/character"><a><Button style={{width:'7%',marginTop:'1%'}}>ถัดไป</Button></a></Link></center>
    </div>
	</div></div>
)
export default Index
