import React, { Component } from 'react'
import styled from 'styled-components'
import S3Upload from './UserRegister/S3Upload'

export default class UserRegister extends Component {
  render() {
    return (
      <ProfileContainer>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <S3Upload />

          <ProfileStats>
            <Stats>Top City FORTLAUDERDALE</Stats>
            <Stats>Top Venue REVOLUTION</Stats>
            <Stats>Total Reviews: 24</Stats>
            <Stats>Total Check-ins: 56</Stats>
          </ProfileStats>
        </div>

        <div>Edit Your Profile</div>
      </ProfileContainer>
    )
  }
}

const ProfileContainer = styled.section`
  height: 100vh;
  padding: 1rem;
  background: lightgray;
  color: #c8c8c8;
  display: flex;
`

const ProfileStats = styled.section`
  background: white;
  width: 250px;
`

const Stats = styled.div`
  padding: 10px;
`
