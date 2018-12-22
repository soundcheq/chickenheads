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
              <GenderBar><FemaleBar/></GenderBar>
              <AgeContainer>
                <AgeGroup percent={0.5}>18-20</AgeGroup>
                <AgeGroup percent={0.8}>21-24</AgeGroup>
                <AgeGroup percent={0.4}>25-29</AgeGroup>
                <AgeGroup percent={0.3}>30-35</AgeGroup>
                <AgeGroup percent={0.3}>36-44</AgeGroup>
                <AgeGroup percent={0.1}>45+</AgeGroup>
              </AgeContainer>

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
`

//---Dash Metric-----//


//-----Demographics-----//

const GenderBar = styled.div`
width: 70%;
height: 30px;
background: #e8e8e8;
border-radius: 5px;
overflow: hidden;
`

const FemaleBar = styled.div`
width: 55%;
height: 100%;
background: linear-gradient(#A632FF, #851BD7);
`

const AgeContainer = styled.div`
${style.f}
${style.allCenter}
flex-wrap: wrap;
width: 80%;
height: 80px;
`

const AgeGroup = styled.div`
${style.f}
${style.allCenter}
flex: 1 0 33%; 
margin: 5px;
max-width: 60px;
height: 30px;
background: ${props => props.percent ? `rgb(133, 27, 215, ${props.percent})` : '#851BD7'};
border-radius: 5px;
color: white;
`


//-----Demographics-----//
