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

          <Card column>
            <DashSection>

              <ArtistProfile>

                <ArtistImage/>

                <ArtistText>
                  <p>Next Event:</p>
                  <h1>This Artist is Super Long Name</h1>
                  <h5>Friday, April 3rd</h5>
                </ArtistText>
                
              </ArtistProfile>

              <GenreBar>
                <p>Hip Hop</p>
                <p>Jazz</p>
                <p>Rock</p>
              </GenreBar>

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


//----Variables-----//
const f = 'display: flex;'
const column = 'flex-direction: column;'
const center = 'align-items: center;'
const allCenter = 'justify-content: center; align-items: center;'
//----Variables-----//


//-----Layout Components------//
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

const DashSection = styled.div`
${f};
${column};
${allCenter};
width: 33%;
height: 100%;
position: relative;
background: ${props => props.grey ? '#f7f7f7;' : 'white;'};
z-index: ${props => props.topLayer ? '2' : ''}
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
//-----Layout Components------//


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


const GenreBar = styled.div`
${f};
${center};
justify-content: space-evenly;
background: black;
color: white;
border-radius: 15px;
height: 20px;
width: fit-content;
padding: 15px 10px;
p {
  padding: 0px 10px;
}
`

//---Artist Info-----//

const ArtistProfile = styled.div`
${f};
${center};
width: 100%;
height: 100px;
padding: 0px 20px;
margin: 20px 0px;
border: 1px solid pink;
`

const ArtistImage = styled.div`
width: 80px;
min-width: 80px;
height: 80px;
min-height: 80px;
margin-right: 10px;
border-radius: 50px;
border: 2px solid #00ff4f;
`

const ArtistText = styled.div`
${f};
${column};
justify-content: space-evenly;
width: fit-content;
max-width: 200px;
height: 80%;
border: 1px solid gray;

h1 {
  font-size: 1.5em;
  font-weight: 600;
  white-space: nowrap; 
  overflow: hidden;
  text-overflow: ellipsis;
}
h5 {
  color: gray;
}
p {
  font-size: 0.8em;
  color: gray;
}
`

//---Artist Info-----//