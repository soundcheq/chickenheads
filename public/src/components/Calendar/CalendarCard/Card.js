import React, { Component } from 'react'
import styled from 'styled-components'

export default class Card extends Component {
  state = {
    month: 'July'
  }
  render() {
    return (
      <div>
        <Month>{this.state.month}</Month>
        <CardContainer>
          <Container>
            <ImageContainer>IMAGE HERE</ImageContainer>
          </Container>
          <Container>
            <ImageContainer>IMAGE HERE</ImageContainer>
          </Container>
          <Container>
            <ImageContainer>IMAGE HERE</ImageContainer>
          </Container>
          <Container>
            <ImageContainer>IMAGE HERE</ImageContainer>
          </Container>
        </CardContainer>
      </div>
    )
  }
}

const Container = styled.section`
  background: gray;
  width: 200px;
  height: 200px;
  margin-bottom: 1.5rem;
`
const ImageContainer = styled.section`
  height: 135px;
  background: lightblue;
`
const CardContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  padding: 0.25rem 1rem;
`
const Month = styled.div`
  margin-top: 5rem;
  display: flex;
  margin-left: 4rem;
  font-size: 2rem;
  font-style: italic;
  border-bottom: 2px solid black;
  width: 113px;
  margin-bottom: 2rem;
`
