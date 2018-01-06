import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { compose, withState } from 'recompose';
import ReactTimeOut from 'react-timeout'
import Router from 'next/router'

import Selectling from './Selectling'
import Selectyak from './Selectyak'
import RightToLeft from '../PageTransition/RightToLeft'
import Scorebar from './Scorebar'
import Bg from '../BgIntro'
import MoveDown from '../PageTransition/MoveDown'
import MoveToLeft from '../PageTransition/MoveToLeft'


const Div = styled.div`
  width: 100vw;
  height: 100vh;
`
const Fit = styled.div`
  padding-right: 0px;
  padding-left: 0px;
  max-height: 100%;
  @media (max-width: 992px) {
	  max-height: 50%;
  }
`
const go = withState('go', 'setGo', false)

const setGo = (callback, data) => (
  callback(!data),
  setTimeout( () => Router.push('/singlepage-l'), 700)
)

const Select = (props) => (

  <Bg>
        <MoveToLeft check={props.check}>
        <MoveDown go={props.go}>
          <Scorebar />
          <div className="container-fluid">
            <Div className="row">
              <Fit onClick={ () => setGo(props.setGo, props.go)} className="col-12 col-sm-12 col-md-12 col-lg-6">
                <Selectling />
              </Fit>
              <Fit className="col-12 col-sm-12 col-md-12 col-lg-6">
                <Selectyak />
              </Fit>
            </Div>

          </div>
       </MoveDown> 
       </MoveToLeft>
    
  </Bg>

)

const selectcompose = compose(go)(Select)

export default selectcompose