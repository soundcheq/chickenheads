import React from 'react'
import styled from 'styled-components'
import * as style from '../_Variables'
import RsvpGraph from './charts/RsvpGraph'

export default function DashMetrics() {
  return (
    <React.Fragment>
              <DashMetric>
                <h2>RSVPs</h2>
                <RsvpGraph/>
              </DashMetric>

              <DashMetric>
                <h2>CHEQs</h2>
              </DashMetric>
    </React.Fragment>
  )
}

//---Dash Metric-----//

const DashMetric = styled.div`
  ${style.f};
  ${style.allCenter};
  ${style.w100};
  height: 50%;
`

//---Dash Metric-----//