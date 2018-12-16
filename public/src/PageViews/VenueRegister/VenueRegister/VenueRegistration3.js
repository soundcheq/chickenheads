import React, { Component } from 'react'
import axios from 'axios';
import styled from 'styled-components'
import EditButton from '../../../components/Buttons/EditButton';
import TextInput from '../../../components/Inputs/TextInput'
import VenueTagInput from '../../../components/Inputs/VenueTagInput'

const DashboardContainer = styled.div`
  height: 95vh;
  width: 75vw;
  padding: 40px;
  background: #ffffff;
  overflow: scroll;
`
const Header = styled.div`
  font-size: 40px;
  margin-bottom: 10px;
  color: #343535;
  text-align: left;
`
const SubHeader = Header.extend`
  text-align: left;
  font-size: 20px;
  margin-top: 40px;
  margin-bottom: 20px;
`

const Address = styled.p`
  font-size: 20px;
`

const Break = styled.div`
  border-bottom: 1px solid #dfe1e1;
  height: 15px;
`
const ProfileContainer = styled.div`
  margin-top: 30px;
  width: 100%;
  height: 180px;
  overflow: visible
`
const ProfileInfoContainer = styled.div`
  position: relative;
  bottom: 125px;
  left: 175px;
`

const ProfilePictureContainer = styled.div`
  background: #a48ad4;
  height: 150px;
  width: 150px;
  margin-left: 10px;
  border-radius: 50%;
  margin-top: 10px;
`

const VenueName = styled.p`
  font-size: 36px;
  margin-bottom: 3px;
`

const ProfilePicture = styled.img`
  height: 150px;
  width: 150px;
`

const WebsiteFieldContainer = styled.div`
  width: 100%;
`


class VenueRegistration3 extends Component {
  state = {

  //used
  venueHomepage: '',
  facebookLink: '',
  twitterLink: '',
  youtubeLink: '',
  
  //unused so far
  venueName: '',
  address: '',
  city: '',
  state: '',
  zip: '',
  capacity: '',
  website: '',
  phone: '',
  venueType: '',
  soundTypes: [],
  phoneError: false,
  addressError: false, 
  websiteError: false,
  zipcodeError: false,
  capacityError: false
}

handleInput = e => {
  let { name, value } = e.target
  this.setState({
    [name]: value
  })
}

  render() {

    return (
      <DashboardContainer>

        <Header>Profile</Header>
        <Break/>

        <ProfileContainer>
          <ProfilePictureContainer>
            <ProfilePicture src="https://www.metromusichall.com/files/2016/10/metro-music-hall-logo-circle-inverse.png">
            </ProfilePicture>
          </ProfilePictureContainer>

          
          <ProfileInfoContainer>
            <VenueName>Metro Music Hall</VenueName>
            <Address>49 N 400 W</Address>
            <Address>Salt Lake City, UT 84101</Address>
            <EditButton title={`EDIT`} marginTop="10px"/>
          </ProfileInfoContainer>
        </ProfileContainer>

        <SubHeader>Websites</SubHeader>
        
        <WebsiteFieldContainer>
          <i style={{fontSize: "24px", marginRight: "24px"}} className="fas fa-home"></i>
          <TextInput
              name={'venueHomepage'}
              placeholder={'Venue Homepage'}
              type={'text'}
              updateFn={this.handleInput}
              required={'required'}
              width={"60%"}
          />
        </WebsiteFieldContainer>

        <WebsiteFieldContainer>
        <i style={{fontSize: "24px", marginRight: "29px"}} className="fab fa-facebook-square"></i>
          <TextInput
              name={'facebookLink'}
              placeholder={'Facebook Profile'}
              type={'text'}
              updateFn={this.handleInput}
              required={'required'}
              width={"60%"}
          />
        </WebsiteFieldContainer> 

        <WebsiteFieldContainer>
        <i style={{fontSize: "24px", marginRight: "29px"}} className="fab fa-twitter-square"></i>
          <TextInput
              name={'twitterLink'}
              placeholder={'Twitter Profile'}
              type={'text'}
              updateFn={this.handleInput}
              required={'required'}
              width={"60%"}
          />
        </WebsiteFieldContainer>

        <WebsiteFieldContainer>
        <i style={{fontSize: "24px", marginRight: "29px"}} className="fab fa-youtube-square"></i>
          <TextInput
              name={'youtubeLink'}
              placeholder={'Youtube Profile'}
              type={'text'}
              updateFn={this.handleInput}
              required={'required'}
              width={"60%"}
          />
        </WebsiteFieldContainer>

          <SubHeader>Venue Details</SubHeader>

          <WebsiteFieldContainer>
          <i style={{fontSize: "24px", marginRight: "29px"}} class="fas fa-tags"></i>
           <VenueTagInput
              name={'website'}
              placeholder={'Website'}
              type={'text'}
              updateFn={this.handleInput}
              required={'required'}
              onBlur={this.checkWebsite}
              width={"45%"}
            />
          </WebsiteFieldContainer>

          <WebsiteFieldContainer>
          <i style={{fontSize: "24px", marginRight: "29px"}} class="fas fa-tags"></i>
            <VenueTagInput
              name={'website'}
              placeholder={'Website'}
              type={'text'}
              updateFn={this.handleInput}
              required={'required'}
              onBlur={this.checkWebsite}
              width={"45%"}
            />
          </WebsiteFieldContainer>

          <WebsiteFieldContainer>
          <i style={{fontSize: "24px", marginRight: "29px"}} class="fas fa-tags"></i>
            <VenueTagInput
              name={'website'}
              placeholder={'Website'}
              type={'text'}
              updateFn={this.handleInput}
              required={'required'}
              onBlur={this.checkWebsite}
              width={"45%"}
            />
          </WebsiteFieldContainer>

          <i class="fas fa-volume-up"></i>

      </DashboardContainer>
    )
  }
}

export default VenueRegistration3
