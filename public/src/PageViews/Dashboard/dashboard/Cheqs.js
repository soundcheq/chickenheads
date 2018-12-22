import React from 'react'
import styled from 'styled-components'
import * as style from '../_Variables'

export default function Cheqs() {
  return (
    <Container>

      <CheqFeed>
        Cheq Feed
      </CheqFeed>

      <StatBar>
        <h1>Additional Data</h1>
        <h3>234</h3>
        <h3>234</h3>
        <h3>234</h3>
      </StatBar>

    </Container>
  )
}

const Container = styled.section`
${style.w100}
height: 100%;
display: grid;
grid-template-columns: repeat(12, 1fr);
`

const CheqFeed = styled.div`
grid-column: span 9;
border: 1px solid green;
${style.f}
${style.allCenter}
`

const StatBar = styled.div`
grid-column: span 3;
${style.f}
${style.column}
justify-content: space-evenly;
border: 1px solid blue;
padding-bottom: 50%;
`
