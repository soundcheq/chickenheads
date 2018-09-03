import React, { Component } from 'react'
import styled from 'styled-components'

import { Flipper, Flipped } from 'react-flip-toolkit'

const items = [
  { id: 1, color: 'green' },
  { id: 2, color: 'red' },
  { id: 3, color: 'blue' },
  { id: 4, color: 'yellow' }
]

export default class ListAnim extends Component {
  state = {
    toggle: false,
    order: items.map(item => item.id)
  }

  toggleDiv = () => {
    this.setState(prevState => ({
      toggle: !prevState.toggle
    }))
  }

  changeOrder = () => {
    let newOrder = this.state.order;
    newOrder = [...newOrder.splice(newOrder.length - 1, 1), ...newOrder]
    this.setState({
      order: newOrder
    })
  }

  render() {
    return (
      <Flipper flipKey={this.state.order}>
        <Wrapper onClick={this.changeOrder}>
          {
            this.state.order.map(id => items.filter(item => item.id === id)[0])
              .map((item, idx) => {
                return <Flipped flipId={`item-${item.id}`}>
                  <TestDiv background={item.color}/>
                </Flipped>
              })
          }
        </Wrapper>
      </Flipper>
    )
  }
}

const Wrapper = styled.div`
  width: 100%;
  height: 145px;
  background: lightblue;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const TestDiv = styled.div`
  width: 80%;
  height: 30px;
  background-color: ${props => props.background};
  margin: 5px auto;
`

const OtherDiv = styled.div`
  width: 80%;
  height: 30px;
  background-color: blue;
  margin: 25px auto;
`
