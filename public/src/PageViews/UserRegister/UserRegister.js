import React, { Component } from 'react'
import styled from 'styled-components'
import S3Upload from './UserRegister/S3Upload'
import TopUserData from './UserRegister/TopUserData'
import RegisterForm from './UserRegister/RegisterUserForm'

export default class UserRegister extends Component {
  render() {
    return (
      <ProfileContainer>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <S3Upload />
          <TopUserData />
        </div>

        <RegisterForm />
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
