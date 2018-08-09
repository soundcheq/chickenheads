import React, { Component } from 'react'
import styled from 'styled-components'
import RightPanel from '../../components/RightPanel/RightPanel'
import LeftPanel from '../../components/LeftPanel/LeftPanel'

export default class Dashboard extends Component {
  render() {
    return (
      <Container>
        <LeftPanel />
        <RightPanel />
      </Container>
    )
  }
}
const f = 'display: flex'

const Container = styled.section`
  ${f};
`
