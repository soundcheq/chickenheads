import React, { Component } from 'react'
import styled from 'styled-components'
import CreateAccount from './VenueRegister/CreateAccount'
import VenueRegistration from './VenueRegister/VenueRegistration'
import { connect } from 'react-redux'
import {contactInfoCompleteFn, registrationCompleteFn} from "../../ducks/reducers/venue_form_reducer"
import VenueRegistration2 from './VenueRegister/VenueRegistration2'
import VenueRegistration3 from './VenueRegister/VenueRegistration3';

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
  
  state = {}

  render() {

    let { contactInfoComplete } = this.props;
    let { registrationComplete} = this.props;

    return (
      <div>
        <Wrapper>
          {contactInfoComplete ? <CreateAccount /> : 
           !registrationComplete ? <VenueRegistration/> : <VenueRegistration2/>}
          
        </Wrapper>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { contactInfoComplete, registrationComplete } = state.venueFormReducer
  return { contactInfoComplete, registrationComplete};
}

export default connect( mapStateToProps, { contactInfoCompleteFn, registrationCompleteFn } )( VenueRegister );