import React, { Component } from 'react'
import styled from 'styled-components'

import { Flipper, Flipped } from 'react-flip-toolkit'

export default class ListAnim extends Component {
  state = {
    toggle: false
  }

  toggleDiv = () => {
    this.setState(prevState => ({
      toggle: !prevState.toggle
    }))
  }

  render() {
    return (
      <Flipper flipKey={this.state.toggle}>
        <Wrapper>
          <Flipped flipId="square">
            {this.state.toggle ? (
              <OtherDiv onClick={this.toggleDiv} />
            ) : (
              <TestDiv onClick={this.toggleDiv} />
            )}
          </Flipped>
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
  background-color: red;
  margin: 5px auto;
`

const OtherDiv = styled.div`
  width: 80%;
  height: 30px;
  background-color: blue;
  margin: 25px auto;
`
