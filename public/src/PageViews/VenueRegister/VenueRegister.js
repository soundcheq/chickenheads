import React, { Component } from 'react'
import styled from 'styled-components'
import CreateAccount from './VenueRegister/CreateAccount'
import VenueRegistration from './VenueRegister/VenueRegistration'

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  background: #e0e1e6;
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`

class VenueRegister extends Component {
  state = {
    contactInfoCompleted: false
  }
  render() {
    let { contactInfoCompleted } = this.state
    return (
      <div>
        <Wrapper>
          {!contactInfoCompleted ? <CreateAccount /> : <VenueRegistration />}
        </Wrapper>
      </div>
    )
  }
}

export default VenueRegister
