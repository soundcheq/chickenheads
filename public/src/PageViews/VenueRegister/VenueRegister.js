import React, { Component } from 'react'
import styled from 'styled-components'
import ContactInfo from './VenueRegister/ContactInfo'

import Left from '../../components/LeftPanelVenue/index'
import Right from '../../components/RightPanelVenue/index'

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background: #e0e1e6;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`

class VenueRegister extends Component {
  render() {
    return (
      <div>
        <Left />
        <Wrapper>
          <ContactInfo />
        </Wrapper>
        <Right />
      </div>
    )
  }
}

export default VenueRegister
