import React, { Component } from 'react'
import styled from 'styled-components'
import SpotLight from '../Spotlight/Spotlight'

export default class componentName extends Component {
  state = {
    user: 'Skallywag',
    points: 420,
    rsvps: 50,
    eventTime: '10pm'
  }
  render() {
    return (
      <RightPanelContainer>
        <UserContainer>
          <UserIcon />
          <InfoContainer>
            <Welcome>Welcome back,</Welcome>
            <UserCont>
              <User>{this.state.user}</User>
              <UserButton>^</UserButton>
            </UserCont>
            <LINE />
            <PointsContainer>
              <Points>{this.state.points}</Points>
              <div>ICON</div>
            </PointsContainer>
          </InfoContainer>
        </UserContainer>
        {/* TEMPORARY UNTIL DATA ADDED */}
        <EventsContainer>
          <Events>Events</Events>
          <CardContainer>
            <IconContainer>
              <SmallP>02/21/2018</SmallP>
              <EventIcon />
            </IconContainer>
            <EventDetailsContainer>
              <EventName>EVENT NAME: {this.state.eventTime}</EventName>
              <SmallP>{this.state.rsvps} RSVPs</SmallP>
              <SmallP>6 Specials</SmallP>
            </EventDetailsContainer>
            <CreateIcon />
          </CardContainer>
          <CardContainer>
            <IconContainer>
              <SmallP>02/21/2018</SmallP>
              <EventIcon />
            </IconContainer>
            <EventDetailsContainer>
              <EventName>Krunks New Groove: {this.state.eventTime}</EventName>
              <SmallP>RSVPS</SmallP>
              <SmallP>6 Specials</SmallP>
            </EventDetailsContainer>
            <CreateIcon />
          </CardContainer>
        </EventsContainer>
        {/* TEMPORARY UNTIL DATA ADDED */}
        <SpotLight />
      </RightPanelContainer>
    )
  }
}

const f = 'display: flex'

const RightPanelContainer = styled.section`
  width: 17%;
  height: 100vh;
  background: #ecedef;
`

const UserContainer = styled.div`
  background: #70cc81;
  height: 130px;
  ${f};
  color: white;
  justify-content: space-around;
  padding: 1.65rem 0.5rem;
  letter-spacing: 1px;
`
const UserIcon = styled.div`
  height: 72px;
  width: 72px;
  border-radius: 50%;
  background: salmon;
`
const InfoContainer = styled.div`
  width: 58%;
`
const Welcome = styled.div`
  font-size: 11px;
  opacity: 0.6;
`
const User = styled.div`
  font-size: 18px;
  margin: 0.5rem 0;
  margin-bottom: 2px;
  padding-bottom: 0.25rem;
`
const Points = styled.div`
  display: flex;
  justify-content: center;
  padding: 2.5px;
  font-size: 14px;
  width: 32px;
  background: rgb(0, 0, 1, 0.25);
  margin-right: 0.5rem;
  border-radius: 2px;
`
const PointsContainer = styled.section`
  ${f};
  align-items: center;
`

const UserCont = styled.section`
  ${f};
  align-items: center;
`
const UserButton = styled.button`
  padding: 0;
  border: none;
  background: none;
  width: 23px;
  height: 23px;
  background: rgb(0, 0, 0, 0.2);
  margin-left: 2rem;
  outline: transparent;
  border-radius: 4px;
  color: white;
`

const LINE = styled.div`
  border-top: 1px solid white;
  width: 9rem;
  height: 0.5px;
  border-radius: 1px;
  margin-bottom: 0.25rem;
`
// *events CSS Below¿

const EventsContainer = styled.section`
  height: calc(100% - 260px);
  padding: 1.5rem 0.75rem;
`
const Events = styled.div`
  margin-bottom: 1.75rem;
  font-size: 13px;
  opacity: 0.4;
  font-weight: bold;
`
const SmallP = styled.div`
  font-size: 11px;
  display: inline-block;
  opacity: 0.4;
  font-style: italic;
  font-weight: bold;
  letter-spacing: 0.5px;
  margin-bottom: 5px;
`

const EventName = styled.div`
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 5px;
  padding-top: 5px;
  opacity: 0.75;
`

const EventIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 70%;
  background: lightblue;
  border: 2px solid #70cc81;
  margin-top: 0.25rem;
`
const CardContainer = styled.section`
  ${f};
  justify-content: space-between;
  align-items: center;

  padding: 0.15rem 0.25rem;
  position: relative;
  transition: background;
  transition-duration: 0.25s;
  transition-timing-function: ease-in-out;
  margin-bottom: 0.25rem;
  &:hover {
    background: #f4f4f4;
    box-shadow: 0 0px 3px rgba(0, 0, 0, 0.19), 0 0px 0px rgba(0, 0, 0, 0.23);
    border-radius: 4px;
  }
`
const CreateIcon = styled.button`
  height: 20px;
  width: 20px;
  background: salmon;
  position: absolute;
  top: 6px;
  right: 6px;
  visibility: hidden;
  transition: visibility;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  outline: none;
  ${CardContainer}:hover & {
    visibility: visible;
    background: red;
  }
`
const IconContainer = styled.div``
const EventDetailsContainer = styled.section`
  display: flex;
  padding-top: 1rem;
  flex-direction: column;
  position: absolute;
  left: 5rem;
`
// *events CSS Section END.
