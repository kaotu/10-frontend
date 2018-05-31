import React from 'react'
import { getAll } from '../Killer/firebaseHelper'

export default class DiedMain extends React.Component {
  state = {
    
  }
  async componentDidMount () {
    let died = getAll(`died`).then(snap => {
      snap.forEach(data => {
        console.log(getAll)
      })
    })
  }
  render() {
    return (
      <div>
        Died
      </div>
    )
  }
}
