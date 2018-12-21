import React, { Component } from 'react'
import styled from 'styled-components'

export default class Dashboard extends Component {
  render() {
    return (
      <Container>
        <WithTabs>

            <Tabs>
              <Tab currentTab>Dashboard</Tab>
              <Tab>Acuity</Tab>
            </Tabs>

          <Card>
            <DashSection>
              One
            </DashSection>

            <DashSection grey topLayer>
              Two
            </DashSection>

            <DashSection>
              Three
            </DashSection>

            <PurpleBox/>
          </Card>

        </WithTabs>

        <Card height="50vh">
          <PurpleBox top>
            <H1>All Time Stats</H1>
          </PurpleBox>
        </Card>

      </Container>
    )
  }
}


const f = 'display: flex;'
const column = 'flex-direction: column;'
const center = 'align-items: center;'
const allCenter = 'justify-content: center; align-items: center;'

const Container = styled.section`
  ${f};
  ${column};
  width: 100%;
  height: 100vh;
  background-color: #e8e8e8;
  justify-content: space-evenly;
  
`
const Card = styled.div`
  ${f};
  background-color: white;
  position: relative;
  border-radius: 5px;
  width: 96%;
  height: ${props => props.height ? props.height : '40vh'}
  margin: 0 20px;
  overflow: hidden;
`
const WithTabs = styled.div`
  ${f};
  ${column};
`

const Tabs = styled.div`
${f};
width: 250px;
height: 40px;
background: white;
margin: 0 20px;
`

const Tab = styled.div`
${f};
${allCenter};
width: 50%;
height: 100%;
background: ${props => props.currentTab ? 'white' : '#d7d7d7'}
cursor: pointer;
font-weight: 600;
`

const PurpleBox = styled.div`
  ${f};
  ${center};
	height: 15%;
	width: 100%;
	background: linear-gradient(355.91deg, #AF47FF 0%, #9219EE 75%, #880AE8 100%);
  position: absolute;
  ${props => props.top ? 'top: 0;' : 'bottom: -1px;'};
  padding-left: 2%;

`

const H1 = styled.h1`
font-size: 2em;
color: white;
`

const DashSection = styled.div`
${f};
width: 33%;
height: 100%;
position: relative;
background: ${props => props.grey ? '#f7f7f7;' : 'white;'};
z-index: ${props => props.topLayer ? '2' : ''}
`