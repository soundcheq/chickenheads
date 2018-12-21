import React, { Component } from 'react'
import styled from 'styled-components'

export default class Dashboard extends Component {
  render() {
    return (
      <Container>
        <Card>
          I Am Micro Stats.
        </Card>

        <Card height="60vh">
          I Am Macro Stats.
        </Card>
      </Container>
    )
  }
}


const f = 'display: flex'

const Container = styled.section`
  ${f};
  width: 100%;
  height: 100vh;
  background-color: #e8e8e8;
  flex-direction: column;
  justify-content: space-evenly;
  
`
const Card = styled.div`
  ${f}
  background-color: white;
  border-radius: 5px;
  width: 96%;
  height: ${props => props.height ? props.height : '30vh'}
  margin: 0% 2%;
`

