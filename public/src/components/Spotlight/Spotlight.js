import React, { Component } from 'react'
import styled from 'styled-components'

export default class SpotLight extends Component {
  state = {
    spotlight: false
  }
  render() {
    const light = <div> spotlight!!</div>

    //*NOLIGHT↓↓↓
    const noLight = (
      <NoLightContainer>
        <Oops>Oops! No spotlights setup.</Oops>
        <P>Set one up today and start promoting!</P>
        <ClickHere>Click Here</ClickHere>
      </NoLightContainer>
    )
    //*NOLIGHT ↑↑↑

    return (
      <Container>
        <SpotLightp>Spotlight</SpotLightp>
        {this.state.spotlight === true ? light : noLight}
      </Container>
    )
  }
}

const Container = styled.section`
  background: #4c4c4c;
  height: 25.4vh;
  padding: 0.85rem 1.5rem;
`

const SpotLightp = styled.div`
  color: white;
  opacity: 0.6;
  font-size: 12.5px;
  letter-spacing: 0.5px;
  font-weight: 300;
  margin-bottom: 1.25rem;
`
//* SPOTLIGHT STYLES

//* NO LIGHT STYLES
const Oops = styled.p`
  font-size: 16.5px;
  color: white;
  margin: 0;
  font-weight: bold;
  letter-spacing: 0.5px;
  opacity: 0.9;
`
const NoLightContainer = styled.section``
const P = styled.div`
  font-size: 10.5px;
  margin: 5px 0;
  color: white;
  font-style: italic;
  opacity: 0.9;
`
const ClickHere = styled.div`
  color: lightblue;
  font-size: 10.5px;
  font-style: italic;
`
