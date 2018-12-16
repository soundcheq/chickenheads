import React, { Component } from 'react'
import { addressFn, zipcodeFn, websiteFn} from '../../../utils/formValidators'
import styled from 'styled-components'
import TextInput from '../../../components/Inputs/TextInput'
import FormButton from '../../../components/Buttons/FormButton'
import StateInput from '../../../components/Inputs/StateInput'
import VenueTagInput from '../../../components/Inputs/VenueTagInput'
import SoundTagInput from '../../../components/Inputs/SoundTagInput'

const RegisterContainer = styled.div`
  height: 95vh;
  width: 75vw;
  padding: 40px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
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
const Error = styled.div`
  height: 40px;
  width: 200px;
  color: #ff9494;
  margin-left: 10px;
`
const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const VenueTagContainer = styled.div`
  width: 50%;
  margin-right: 10px;
`

const SoundTagContainer = styled.div`
  width: calc(50% - 10px);
`

class VenueRegistration extends Component {
  state = {
    venueName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    capacity: '',
    website: '',

    //tags

    venueTag1: null,
    venueTag2: null,
    venueTag3: null,

    soundTag1: null,
    soundTag2: null,
    soundTag3: null,

    //errors

    addressError: false, 
    websiteError: false,
    zipcodeError: false,
    capacityError: false
  }

  handleSubmit = () => {
    // CHECK FOR ERRORS
    alert('Submitted')
  }

  handleInput = e => {
    let { name, value } = e.target
    this.setState({
      [name]: value
    })
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

    let venueTagSelect2;
    this.state.venueTag1 ? <VenueTagInput/> : "Please add three venue tags"

    let venueTagSelect3;
    this.state.venueTag2 ? <VenueTagInput/> : "Please add three venue tags"
    
    let soundTagSelect2;
    this.state.soundTag1 ? <SoundTagInput/> : "Please add three sound tags"

    let soundTagSelect3;
    this.state.soundTag2 ? <SoundTagInput/> : "Please add three sound tags"

    return (
      <RegisterContainer>
        <Header>Add A Venue</Header>
        <SubHeader>
          At Soundcheq, venues get access to their customers in ways never
          before possible.
        </SubHeader>
        <Form onSubmit={() => this.handleSubmit()}>

            {/* We need a a way to check if the venue exists in the db */}

          <TextInput
            name={'venueName'}
            placeholder={'Venue Name'}
            type={'text'}
            updateFn={this.handleInput}
            required={'required'}
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

          <InputContainer>

          <TextInput
            name={'website'}
            placeholder={'Website'}
            type={'text'}
            updateFn={this.handleInput}
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
              required={'required'}
          />

          </InputContainer>


{/* VENUE TAGS */}
        <InputContainer>
          <VenueTagContainer>
            <VenueTagInput
              type={'text'}
              required={'required'}
            />

            {venueTagSelect2}
            {venueTagSelect3}
          </VenueTagContainer>

          <SoundTagContainer>
            <SoundTagInput
              type={'text'}
              required={'required'}
            />
            {soundTagSelect2}
            {soundTagSelect3}
          </SoundTagContainer>
          </InputContainer>


          <FormButton type={'submit'} title={'Add Venue'} />
        </Form>
      </RegisterContainer>
    )
  }
}

export default VenueRegistration
