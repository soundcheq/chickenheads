import React from 'react'
import styled from 'styled-components'
import * as style from '../_Variables'
import Pie from './charts/Pie'

export default function DashMetrics() {
  return (
    <React.Fragment>
              <DashMetric>
                {/* <h2>RSVPs</h2> */}
                <Pie count={600} display={212}/>
                <Pie count={400} display={238}/>
                <Pie count={100} display={450}/>
              </DashMetric>

              <DashMetric>
                {/* <h2>CHEQs</h2> */}
                <Pie cheq count={600} display={217}/>
                <Pie cheq count={400} display={119}/>
                <Pie cheq count={100} display={336}/>
              </DashMetric>

    </React.Fragment>
  )
}

//---Dash Metric-----//

const DashMetric = styled.div`
${style.f}
${style.w100}
height: 50%;
justify-content: space-evenly;
align-items: center;
`

//---Dash Metric-----//