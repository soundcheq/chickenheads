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
            <Welcome>welcome back,</Welcome>
            <UserCont>
              <User>{this.state.user}</User>
              <UserButton>^</UserButton>
            </UserCont>
            <PointsContainer>
              <Points>{this.state.points}</Points>
              <div>ICON</div>
            </PointsContainer>
          </InfoContainer>
        </UserContainer>
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
  font-size: 13px;
`
const User = styled.div`
  font-size: 18px;
  border-bottom: 1px solid white;
  margin: 0.5rem 0;
  padding-bottom: 0.25rem;
`
const Points = styled.div`
  display: flex;
  justify-content: center;
  padding: 4px;
  font-size: 14px;
  width: 32px;
  background: rgb(0, 0, 0, 0.25);
`
const PointsContainer = styled.section`
  ${f};
  align-items: center;
`

const UserCont = styled.section`
  ${f};
`
const UserButton = styled.button`
  width: 25px;
  height: 25px;
  background: rgb(0, 0, 0, 0.25);
  margin-left: 1rem;
  outline: transparent;
`
