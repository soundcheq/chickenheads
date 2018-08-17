import React, { Component } from 'react'
import styled from 'styled-components'

export default class Dashboard extends Component {
  render() {
    return (
      <Container>
        <span>I am Dashboard</span>
      </Container>
    )
  }
}
const f = 'display: flex'

const Container = styled.section`
  ${f};
`
