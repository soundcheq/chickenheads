import React from 'react'
import styled from 'styled-components'
import * as style from '../_Variables'
import {PurpleBox} from '../_Components'

export default function ArtistDashboard() {
  return (
    <React.Fragment>
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

              <DashMetric>
                <h2>RSVPs</h2>
              </DashMetric>

              <DashMetric>
                <h2>CHEQs</h2>
              </DashMetric>

            </DashSection>

            <DashSection>
              Demographics
            </DashSection>

        <PurpleBox/>
    </React.Fragment>
  )
}

const DashSection = styled.div`
${style.f};
${style.column};
${style.allCenter};
width: 33%;
height: 100%;
position: relative;
background: ${props => props.grey ? '#f7f7f7;' : 'white;'};
z-index: ${props => props.topLayer ? '2' : ''}
`

//---Artist Info-----//

const GenreBar = styled.div`
${style.f};
${style.center};
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

const ArtistProfile = styled.div`
${style.f};
${style.center};
${style.w100};
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
${style.f};
${style.column};
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



//---Dash Metric-----//

const DashMetric = styled.div`
  ${style.f};
  ${style.allCenter};
  ${style.w100};
  height: 50%;
  border: 1px solid purple;
  
`

//---Dash Metric-----//