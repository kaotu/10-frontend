import React from 'react'
import styled, { keyframes } from 'styled-components'
import {compose,lifecycle,withState} from 'recompose'

const Bg = styled.div`
    position: relative;
    height: 100vh;
    width: 100vw;
    top: -300vh;
`
const Monkey = styled.img`
    position : absolute;
    z-index:9;
    left: 5vw;
    bottom: 0vh;
    height : 60vh;
`
const Giant = styled.img`
    position : absolute;
    z-index:9;
    right: 5vw;
    bottom: 0vh;
    height : 60vh;
`
const setTeam = (team) => {
    window.localStorage.setItem('team',team )
    window.location.reload()
  }
  
const ModelIndex = props => (
    <Bg>
        <Monkey onClick={() => setTeam('ling')} src='/static/image/Moling.svg'/>
        <Giant onClick={() => setTeam('yak')} src='/static/image/Moyak.svg'/>
    </Bg>
)
export default compose(
    withState('check','setCheck',true),
    withState('team','setTeam',''),
    lifecycle({
      componentDidMount () {
        let team = window.localStorage.getItem("team")
        const teamyak = {
          what: 'linear-gradient(to top , rgba(0,0,0,.65),rgba(255, 51, 0,1))',
          when: 'linear-gradient(to top , rgba(0,0,0,.65),rgba(255, 51, 0,1),rgba(0,0,0,.65))',
          nav: '#384742',
          navhov: '#002d40',
          iconl: '../../static/image/yakscore-new-01.svg',
          iconr: '../../static/image/hanumanscore-new-01.svg',
          scroll: '../../static/image/ScrollYak.png' ,
          cloud: '../../static/image/เมฆแดง.png',
          faqs: '#FFFF66',
          index: 'linear-gradient(#eaac35, #f3a8a5,#e53c35)'
        }
        const teammongkey = {
          what : 'linear-gradient(to top, rgba(0,0,0,.65), rgba(119, 169, 220, 1),rgba(119, 169, 220, 1))' ,
          when : 'linear-gradient(to top, rgba(0,0,0,.65),rgba(119, 169, 220, 1),rgba(0,0,0,.65))',
          nav : '#002d40',
          navhov : '#e53c35',
          iconl: '../../static/image/hanumanscore-new-01.svg' ,
          iconr: '../../static/image/yakscore-new-01.svg',
          scroll: '../../static/image/ScrollMongkey.png' ,
          cloud: '../../static/image/CloudBack.svg',
          faqs : '#CCFFFF',
          index: 'linear-gradient(#6791BC, #B7CFEB,#6791BC)'
        }
        team == 'yak' ? 
          window.localStorage.setItem("color",JSON.stringify(teamyak)) : 
          window.localStorage.setItem("color",JSON.stringify(teammongkey))
        let theme = JSON.parse(window.localStorage.getItem("color"))
        this.props.setTeam(theme)
      }
    })
  )(ModelIndex)
  
