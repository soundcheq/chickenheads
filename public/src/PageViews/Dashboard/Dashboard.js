import React, { Component } from 'react'
import styled from 'styled-components'
import * as style from './_Variables'
import {Card, PurpleBox, H1, Tabs, Tab} from './_Components'
import ArtistDashboard from './dashboard/ArtistDashboard'
import ArtistAcuity from './dashboard/ArtistAcuity'
import MacroStats from './dashboard/MacroStats'

export default class Dashboard extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentTab: 0
    }
  }

  render() {
    const {currentTab} = this.state
    const height = currentTab === 1 ? '60vh' : '40vh'

    return (
      <Container>

        <CardContainer>
          <Tabs>
            <Tab 
            tab={currentTab === 0 ? true : false}
            onClick={() => this.setState({currentTab: 0})}
            >Dashboard</Tab>

            <Tab 
            tab={currentTab === 1 ? true: false}
            onClick={() => this.setState({currentTab: 1})}>Acuity</Tab>
          </Tabs>

          <Card column>
          {currentTab === 0 ? <ArtistDashboard/> : <ArtistAcuity/> }
          </Card>

        </CardContainer>

        <MacroStats/>

      </Container>
    )
  }
}


//-----Styles-----//

const Container = styled.section`
  ${style.f};
  ${style.column};
  ${style.w100};
  height: 100vh;
  background-color: #e8e8e8;
  justify-content: space-evenly;
`

const CardContainer = styled.div`
  ${style.f};
  ${style.column};
`

//-----Styles-----//