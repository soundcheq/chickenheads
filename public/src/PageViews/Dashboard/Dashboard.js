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
      currentTab: 1,
      currentSubTab: 0
    }
  }

  changeSubMenu = (tab) => {
    this.setState({currentSubTab: tab})
  }

  render() {
    const {currentTab, currentSubTab} = this.state
    
    return (
      <Container>
        <ScrollContainer>

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

          <Card column height={currentTab === 0 ? '35vh' : '80vh'}>

          {currentTab === 0 ? 
          <ArtistDashboard/> 
          : 
          <ArtistAcuity 
          subMenu={currentSubTab}
          changeSubMenu={this.changeSubMenu}/> 
          }

          </Card>

        </CardContainer>

        <MacroStats/>

        </ScrollContainer>
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
  overflow-y: auto;
`

const ScrollContainer = styled.div`
  ${style.w100}
  height: fit-content;
  margin: 2% 0%;

`

const CardContainer = styled.div`
  ${style.f};
  ${style.column};
`

//-----Styles-----//