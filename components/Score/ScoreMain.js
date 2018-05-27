import React from 'react'
import axios from 'axios'
import Styled from 'styled-components'
import {api_url} from './api'

class ScoreMain extends React.Component {
  
  state = {
    ranking : [],
    isEqualAll: 0
  }

  componentDidMount = async () => {
    let {data : {data}} = await axios({
      method: 'get',
      url: `${api_url}/scores`
    })
    data.sort((a,b) => {
      return a.score < b.score
    })
    this.setState({
      isEqualAll: await this.checkScoreEqualAll(data),
      ranking: await this.makeRanking(data)
    })
  }

  checkScoreEqualAll = (data) => {
    let status = true
    for (let i = 1; i < data.length; i++) {
      if(data[0].score !== data[i].score){
        status = false
        break
      }
    }
    return status
  }
  
  makeRanking = (data) => {
    let ranking = [[],[],[],[],[],[],[],[],[],[]]
    let order = 0
    for (let i = 0; i < data.length; i++) {
      if(data[i] != null){
        ranking[order].push(data[i])
      }else{
        continue
      }
      for (let j = i+1; j < data.length; j++) {
        if(data[j] != null && ranking[order][0].score === data[j].score){
          ranking[order].push(data[j])
          data[j] = null
        }
      }
      order++
    }
    return ranking
  }

  render () {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col'>
            {
              this.state.isEqualAll === true ? 'true' : 'false'
            }
          </div>
        </div>
      </div>
    )
  }
}

export default ScoreMain
