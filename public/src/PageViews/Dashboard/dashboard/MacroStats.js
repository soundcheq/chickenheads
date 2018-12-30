import React from 'react'
import styled from 'styled-components'
import * as style from '../_Variables'
import {Card, PurpleBox, H1} from '../_Components'
import MacroChart from './charts/MacroChart'


export default function MacroStats() {
  return (
    <Card height="50vh" mTop>
          <PurpleBox top> <H1>All Time Stats</H1> </PurpleBox>

          <StatsContainer>

            <Numbers>
              
              <H3>Events</H3>
              <H2>500</H2>

              <H3>RSVPs</H3>
              <H2 color="#ffbe0b">149</H2>

              <H3>CHEQs</H3>
              <H2 color="#12db00">45</H2>

              <H3>QP Earned</H3>
              <H2>2424</H2>
             
            </Numbers>

            <Graph>
              
              <MacroChart/>
            </Graph>

          </StatsContainer>
    </Card>
  )
}

const StatsContainer = styled.div`
display: grid;
grid-template-columns: repeat(12, 1fr);
width: 100%;
height: 85%;
position: absolute;
bottom: 0;
color: black;
`
const Numbers = styled.div`
grid-column: span 3;
${style.f}
${style.column}
justify-content: space-evenly;
padding: 10px 0px;
padding-left: 30px;
`

const Graph = styled.div`
grid-column: span 9;
${style.f}
${style.allCenter}
`
const H2 = styled.div`
font-size: 2em;
font-weight: 600;
color: ${props => props.color ? props.color : 'black'};
`

const H3 = styled.div`
font-size: 1.2em;
font-weight: 600;
color: #777777;
`
