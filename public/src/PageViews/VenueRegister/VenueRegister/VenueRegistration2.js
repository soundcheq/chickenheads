import React, { Component } from 'react'
import styled from 'styled-components'

const RegisterContainer = styled.div`
  height: 95vh;
  width: 75vw;
  padding: 40px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Header = styled.div`
  font-size: 40px;
  margin-bottom: 20px;
  color: #343535;
`
const SubHeader = Header.extend`
  text-align: center;
  font-size: 16px;
  line-height: 1.2rem;
  margin-bottom: 30px;
`


class VenueRegistration2 extends Component {
  state = {
   
  }

  render() {
    return (
      <RegisterContainer>
        <Header>Thank you for registering!</Header>
        <SubHeader>
            Enjoy this introductory video, then add more information about your venue. <br/>
            Be on the lookout for new features coming your way!
        </SubHeader>
      </RegisterContainer>
    )
  }
}

export default VenueRegistration2
