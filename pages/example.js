import React from 'react'
import styled from 'styled-components'
import {withState, compose} from 'recompose'

const Img = styled.img`
    transition: .5s;
    width: ${props => props.active ? '800px': '300px'};
`



const Example = (props) => {
    // let newClicker = clicker
    return (
        <div>
            {
                
                props.clicker.map( (data, i) => (
                    <Img  onClick={ 
                        () => {
                            props.clicker[i] = true
                            setClicker(props.clicker)
                        } 
                    } active={props.clicker[i]} src='/static/image/BoxHeart.svg' />
                ))
            }    
        </div>
    )
}

const state = withState('clicker', 'setClicker', [
    false, false, false, false
])

export default compose(
    state,
    withState('test', 'setTest', [
        false, false, false, false
    ])
)(Example)