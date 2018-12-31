import React from 'react'
import styled from 'styled-components'
import * as style from '../_Variables'
import Pie from './charts/Pie'

export default function DashMetrics() {
  return (
    <Container>
              <DashMetric>
                <h2>RSVPs</h2>
                <PieContainer>
                  <Pie count={600} display={212} 
                  chartTitle="First Time"/>

                  <Pie count={400} display={238} chartTitle="Recurring"/>

                  <Pie count={100} display={450} chartTitle="Total"/>
                </PieContainer>
              </DashMetric>

              <DashMetric>
                <h2>CHEQs</h2>
                <PieContainer>
                  <Pie cheq count={600} display={217}
                  chartTitle="First Time"/>

                  <Pie cheq count={400} display={119}
                  chartTitle="Recurring"/>

                  <Pie cheq count={100} display={336}
                  chartTitle="Total"/>
                </PieContainer>
              </DashMetric>

    </Container>
  )
}

//---Dash Metric-----//

const Container = styled.section`
${style.f}
${style.column}
${style.w100}
justify-content: space-evenly;
`

const DashMetric = styled.div`
${style.f}
${style.column}
${style.w100}
align-items: center;
margin: 2% 0%;

h2 {
  margin: 2% 0%;
  font-size: 1.1em;
  color: #636363;
}

`

const PieContainer = styled.div`
${style.f}
${style.w100}
height: 50%;
justify-content: space-evenly;
align-items: center;
`

//---Dash Metric-----//