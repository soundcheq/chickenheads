import React, { Component } from 'react'
import CalendarComp from './Calendar/Cal'
import CalendarCard from './Calendar/CalendarCard/CalendarCard'
import styled from 'styled-components'

export default class CalendarPage extends Component {
  state = {
    buttonColor: ['#a48ad4', 'gray'],
    buttonChoice: true
  }

  view(bool) {
    this.setState({
      buttonChoice: !bool
    })
  }
  render() {
    return (
      <Container>
        <CalendarContainer>
          <MyEvents>My Events</MyEvents>
          <ViewContainer>
            <CalendarButton
              onClick={_ => this.view(this.state.buttonChoice)}
              buttonColor={
                this.state.buttonChoice
                  ? this.state.buttonColor[0]
                  : this.state.buttonColor[1]
              }
            >
              Calendar View
            </CalendarButton>
            <ViewButton
              onClick={_ => this.view(this.state.buttonChoice)}
              buttonColor={
                this.state.buttonChoice
                  ? this.state.buttonColor[1]
                  : this.state.buttonColor[0]
              }
            >
              List View
            </ViewButton>
          </ViewContainer>
          {this.state.buttonChoice ? <CalendarComp /> : <CalendarCard />}
        </CalendarContainer>
      </Container>
    )
  }
}

const f = 'display: flex'

const Container = styled.section`
  ${f};
`

const CalendarContainer = styled.section`
  text-align: center;
  width: 65.56%;
  position: absolute;
  left: 16.5%;
`

const MyEvents = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 2rem;
  font-style: italic;
`
const ViewContainer = styled.section`
  display: flex;
  justify-content: center;
`
const CalendarButton = styled.button`
  display: ${props => props.display};
  padding: 0.75rem 3.25rem;
  outline: none;
  color: white;
  background: ${props => props.buttonColor};
  font-size: 14px;
  letter-spacing: 0.75px;
  margin: auto 18px;
  width: 25%;
  margin-left: 1rem;
  margin-top: 1rem;
`
const ViewButton = styled.button`
  display: ${props => props.display};
  padding: 0.75rem 3.25rem;
  outline: none;
  color: white;
  background: ${props => props.buttonColor};
  font-size: 14px;
  letter-spacing: 0.75px;
  margin: auto 18px;
  width: 25%;
  margin-left: 1rem;
  margin-top: 1rem;
`
