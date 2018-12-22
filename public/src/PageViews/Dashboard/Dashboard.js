import React, { Component } from 'react'
import styled from 'styled-components'
import * as style from './_Variables'
import {Card, PurpleBox, H1} from './_Components'
import ArtistDashboard from './dashboard/ArtistDashboard'

export default class Dashboard extends Component {
  render() {
    return (
      <Container>
        <ArtistDashboard/>

        <Card height="50vh">
          <PurpleBox top>
            <H1>All Time Stats</H1>
          </PurpleBox>
        </Card>

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

//-----Styles-----//