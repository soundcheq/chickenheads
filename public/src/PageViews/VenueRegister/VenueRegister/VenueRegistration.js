import React, { Component } from 'react'
import { addressFn, zipcodeFn, websiteFn} from '../../../utils/formValidators'

//Styled Components
import styled, { keyframes } from 'styled-components'
import TextInput from '../../../components/Inputs/TextInput'
import FormButton from '../../../components/Buttons/FormButton'
import StateInput from '../../../components/Inputs/StateInput'
import DynamicTagSelect from '../../../components/Inputs/DynamicTagSelect'

const RegisterContainer = styled.div`
  height: 95vh;
  width: 75vw;
  padding: 40px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const grow = keyframes`	
from {
    margin-bottom: 0px;
    height: 0px;	
    transform: scaleY(0);	
  }	
    to {	
    margin-bottom: 25px;    
    height: 12px;	
    transform: scaleY(1);	
  }	
`
const shrink = keyframes`	
from {
    margin-bottom: 25px;	
    height: 12px;	
    transform: scaleY(1);	
  }	
    to {
    margin-bottom: 0px;	
    height: 0px;	
    transform: scaleY(0);	
  }	
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
`
const Header = styled.div`
  font-size: 40px;
  margin-bottom: 20px;
  color: #343535;
`
const SubHeader = Header.extend`
  text-align: center;
  font-size: 16px;
  margin-bottom: 30px;
`
const TagHeader = SubHeader.extend`
  margin-bottom: 10px;
  font-size: 16px;
`
const Error = styled.div`
  overflow: hidden;
  display: ${props => (props.error === true ? `block` : `none`)}
  height: 0px;
  width: 100%;
  color: red;
  margin-left: 20px;
  font-size: 12px;
  margin-bottom: 0px;
  animation: ${props => (props.error === true ? grow : shrink)} 0.5s forwards;
`
const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`
const VenueTagContainer = styled.div`
  margin-right: 10px;
  width: calc(50% - 5px);
`
const SoundTagContainer = styled.div`
  width: calc(50% - 5px);
`
const VenueExistsContainer = styled.div`
  display: ${props => (props.error === true ? `flex` : `none`)}
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 40px;
  margin-bottom: 15px;
`
const TagText = styled.span`
  font-size: 12px;
  text-align: center;
  margin-left: 5px;
  display: none;
`

const VenueProfilePicture = styled.div`
  background-color: orange;
  border-radius 50%;
  width: 50px;
  height: 50px;
`
const VenueMatchDetails = styled.div`
  margin-left: 10px;
  overflow: visible;
  white-space: nowrap;
`

const VenueMatchHeader = styled.p`
  font-size: 20px
  font-weight: bold;
`
const VenueMatchAction = styled.div `
  text-align: center;
  width: 175px;
`
const VenueMatchSubHeader = styled.p`
  font-size: 14px
  color: darkgrey;
`

export default class VenueRegistration extends Component {

  state = {
    venueName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    capacity: '',
    website: '',

    //tags

    venueTagArray: ["Nightclub", "Activities", "Lounge", "VIP", "Comedy Club", "Strip Club", "Disco", "Dive Bar", "Dance Club", "Ultra Lounge", "Big Bar", "Sports Bar", "Pub", "Hookah Lounge", "College Bar", "Live Venue", "Day Club", "Brew Pub", "Bar & Grille", "Casino", "Smoking Lounge", "Karaoke Bar", "Theatre", "Billiard Hall", "Speakeasy", "Restaurant Bar", "Gay Bar"],
    venueTag1: '',
    venueTag2: '',
    venueTag3: '',
    soundTagArray: ['House', 'EDM', 'Live Band', 'Top 40', 'Mash-Up', 'Ambient', 'Atmosphere', 'Hip-Hop', 'Latin Dance', 'Reggaeton', 'Rock', 'Country', 'Piano', 'Stand Up', 'Live Sports', 'Indie', 'Local Bands', 'Jukebox', 'DJ', 'Jazz'],
    soundTag1: '',
    soundTag2: '',
    soundTag3: '',

    //errors
    venueError: false,
    addressError: false, 
    websiteError: false,
    zipcodeError: false,
    capacityError: false,

    venueMatchInfo : {}
  }

  handleSubmit = () => {
    // CHECK FOR ERRORS
    //let {venueName, address, city, state, zip, capacity, website, venueTag1, venueTag2, venueTag3, soundTag1, soundTag2, soundTag3} = this.state;
    //let obj = {}
    //axios.post(whatever the endpoint is, obj)
    alert('Submitted')
  }

  updateVenueTag = (value, venueTag) => {
    this.setState({
      [venueTag]: value
    })
  }

  updateSoundTag = (value, soundTag) => {
    this.setState({
      [soundTag] : value
    })
  }

  handleInput = e => {
    let { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  checkVenueName = () => {
      //check table for venue name
  }

  checkWebsite = () => {
    let {website} = this.state;
    let result = websiteFn(website)
    this.setState({ websiteError: !result })
  }

  checkAddress = () => {
    let {address} = this.state;
    let result = addressFn(address)
    this.setState({ addressError: !result})
  }

  checkZipcode = () => {
    let {zip} = this.state;
    let result = zipcodeFn(zip)
    this.setState({ zipcodeError: !result})
  }

  checkCapacity = () => {
    let {capacity} = this.state;
    if(capacity === NaN || capacity < 10 || capacity > 500000)
    this.setState({capacityError: true})
  }

  render() {

    let {venueTag1, venueTag2, venueTag3, soundTag1, soundTag2, soundTag3} = this.state;

    //change to server response
    let venueMatchInfo = {name: "Metro Music Hall", addressLine1: "49 N 400W", addressLine2: "Salt Lake City, UT 84116"}

    return (
      <RegisterContainer>
        <Header>Add A Venue</Header>
        <SubHeader>
          At Soundcheq, venues get access to their customers in ways never
          before possible.
        </SubHeader>
        <Form onSubmit={() => this.handleSubmit()}>

          <VenueExistsContainer error={this.state.venueError}>
              <VenueMatchAction>
                <p style={{fontWeight: "bold", marginBottom: "5px"}}>Is this your venue?</p>
                <a href="" style={{fontSize: "14px"}}>Click here to sign in.</a>
              </VenueMatchAction>
              <VenueProfilePicture/>
              <VenueMatchDetails>
                <VenueMatchHeader>{venueMatchInfo.name}</VenueMatchHeader>
                <VenueMatchSubHeader>{venueMatchInfo.addressLine1}</VenueMatchSubHeader>
                <VenueMatchSubHeader>{venueMatchInfo.addressLine2}</VenueMatchSubHeader>
              </VenueMatchDetails>
          </VenueExistsContainer>

          <TextInput
            name={'venueName'}
            placeholder={'Venue Name'}
            type={'text'}
            updateFn={this.handleInput}
            required={'required'}
            minLength={'3'}
            maxLength={'40'}
            onBlur={this.checkVenueName}
          />

          <InputContainer>
          <TextInput
            name={'address'}
            placeholder={'Address'}
            type={'text'}
            updateFn={this.handleInput}
            required={'required'}
            marginRight={"10px"}
            width={"130%"}
            onBlur={this.checkAddress}
          />

          <StateInput
            name={'state'}
            updateFn={this.handleInput}
            required={'required'}
            marginRight={"10px"}
            width={"50%"}>
          </StateInput>

          <TextInput
            name={'zip'}
            placeholder={'Zip'}
            type={'text'}
            updateFn={this.handleInput}
            required={'required'}
            width={"40%"}
            onBlur={this.checkZipcode}
          />
          </InputContainer>

          <Error error={this.state.addressError}>
            <span>Please confirm your address</span>
          </Error>

          <InputContainer>

          <TextInput
            name={'website'}
            placeholder={'Website'}
            type={'text'}
            updateFn={this.handleInput}
            marginBottom={"15px"}
            required={'required'}
            onBlur={this.checkWebsite}
            width={'70%'}
            marginRight={"10px"}
          />

          <TextInput
              name={'capacity'}
              placeholder={'Capacity'}
              type={'number'}
              updateFn={this.handleInput}
              width={'calc(30% - 10px)'}
              min="10"
              max="500000"
              marginBottom={"15px"}
              required={'required'}
          />

          </InputContainer>
          <Error error={this.state.websiteError}>
            <span>Please confirm your web address for accuracy</span>
          </Error>

        <InputContainer  style={{marginBottom : "15px"}}>

          <VenueTagContainer>
          <TagHeader marginBottom={"10px"}>Venue Tags</TagHeader>
          <DynamicTagSelect 
            list={this.state.venueTagArray}
            updateFn={(e) => this.updateVenueTag(e.target.value, 'venueTag1')}
            choice1={venueTag2}
            choice2={venueTag3}
            marginBottom={"10px"}
            defaultValue={"Venue Tag"}
            />
        {venueTag1 ?
          <DynamicTagSelect 
            list={this.state.venueTagArray}
            updateFn={(e) => this.updateVenueTag(e.target.value, 'venueTag2')}
            marginBottom={"10px"}
            choice1={venueTag1}
            choice2={venueTag3}
            defaultValue={"Venue Tag"}/> : <TagText>Please add another tag</TagText>
        }
        {venueTag1 && !venueTag2 ? <TagText>Please add another tag </TagText> : null}
        {venueTag2 ?
          <DynamicTagSelect
            list={this.state.venueTagArray}
            updateFn={(e) => this.updateVenueTag(e.target.value, 'venueTag3')}
            choice1={venueTag1}
            choice2={venueTag2}
            defaultValue={"Venue Tag"}/> : null
        }
        {venueTag1 && venueTag2 && !venueTag3 ? <TagText>Please add another tag</TagText> : null}
          </VenueTagContainer>


          <SoundTagContainer>
          <TagHeader marginBottom={"10px"}>Sound Tags</TagHeader>
          <DynamicTagSelect 
            list={this.state.soundTagArray}
            updateFn={(e) => this.updateSoundTag(e.target.value, 'soundTag1')}
            choice1={soundTag2}
            choice2={soundTag3}
            marginBottom={"10px"}
            defaultValue={"Sound Tag"}
            />
        {soundTag1 ?
          <DynamicTagSelect 
            list={this.state.soundTagArray}
            updateFn={(e) => this.updateSoundTag(e.target.value, 'soundTag2')}
            marginBottom={"10px"}
            choice1={soundTag1}
            choice2={soundTag3}
            defaultValue={"Sound Tag"}/> : <TagText>Please add another sound tag</TagText>
        }
        {soundTag1 && !soundTag2 ? <TagText>Please add another sound tag </TagText> : null}
        {soundTag2 ?
          <DynamicTagSelect
            list={this.state.soundTagArray}
            updateFn={(e) => this.updateSoundTag(e.target.value, 'soundTag3')}
            choice1={soundTag1}
            choice2={soundTag2}
            defaultValue={"Sound Tag"}/> : null
        }
        {soundTag1 && soundTag2 && !soundTag3 ? <TagText>Please add another sound tag</TagText> : null}


          </SoundTagContainer>
          </InputContainer>


          <FormButton marginTop={"10px"}type={'submit'} title={'Add Venue'} />
        </Form>
      </RegisterContainer>
    )
  }
}


