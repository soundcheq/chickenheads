import React, { Component } from "react"
import styled from "styled-components"

export default class componentName extends Component {
  state = {
    user: "Skallywag",
    points: 420
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
        <div style={{ height: "81.4vh" }}>MAP EVENTS HERE.</div>
        {/* TEMPORARY UNTIL DATA ADDED */}
      </RightPanelContainer>
    )
  }
}

const f = "display: flex"

const RightPanelContainer = styled.section`
  position: absolute;
  right: 0;
  width: 260px;
  background: #ecedef;
`

const UserContainer = styled.div`
  background: #70cc81;
  ${f};
  color: white;
  justify-content: space-around;
  padding: 2rem 1rem;
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
  padding: 4px;
  font-size: 14px;
  width: 32px;
  background: rgb(0, 0, 1, 0.25);
  margin-right: 0.5rem;
  border-radius: 4px;
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
  width: 28px;
  height: 20px;
  background: rgb(0, 0, 0, 0.2);
  margin-left: 1rem;
  outline: transparent;
  border-radius: 4px;
  color: white;
`

const LINE = styled.div`
  border-top: 1px solid white;
  width: 8rem;
  height: 1px;
  margin-bottom: 0.25rem;
`
