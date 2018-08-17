import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import router from '../router'
import LeftPanel from './LeftPanel'
import RightPanel from './RightPanel'
import './App.css'

const pathsWithoutPanels = ['/']

class App extends Component {
  render() {
    const currentPath = this.props.location.pathname
    console.log('The currentPath:', currentPath)

    return (
      <Container>
        <Content>
          {pathsWithoutPanels.includes(currentPath) ? null : <LeftPanel />}

          <RouterContainer
            style={{
              width: pathsWithoutPanels.includes(currentPath) ? '100%' : '70%'
            }}
          >
            {router}
          </RouterContainer>

          {pathsWithoutPanels.includes(currentPath) ? null : <RightPanel />}
        </Content>
      </Container>
    )
  }
}

export default withRouter(App)

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
`

const Content = styled.section`
  width: 100%;
  min-height: 100vh;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`

const RouterContainer = styled.section`
  height: 100vh;
`
