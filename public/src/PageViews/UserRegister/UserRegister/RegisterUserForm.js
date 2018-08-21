import React, { Component } from 'react'
import styled from 'styled-components'

export default class RegisterForm extends Component {
  render() {
    return (
      <div>
        <div>Edit Your Profile</div>
        <button>Go Back</button>
        <section>
          <input type="text" placeholder="Name" name="" />
          <input type="text" placeholder="Email" name="" />
          <input type="text" placeholder="Birthday" name="" />
          <input type="text" placeholder="Location" name="" />
          <input type="text" placeholder="" name="" />
          <input type="text" placeholder="" name="" />
          <input type="text" placeholder="" name="" />
        </section>
      </div>
    )
  }
}

const FormContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`
