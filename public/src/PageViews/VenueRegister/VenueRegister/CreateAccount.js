import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import TextInput from '../../../components/Inputs/TextInput'
import FormButton from '../../../components/Buttons/FormButton'
import { connect } from 'react-redux'
import { phoneFn, emailFn, nameFn, passwordFn, jobTitleFn } from '../../../utils/formValidators'
import {handleVenueRegistrationInput, contactInfoCompleteFn} from "../../../ducks/reducers/venue_form_reducer"
import axios from 'axios';


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


const RegisterContainer = styled.div`
  height: 95vh;
  width: 75vw;
  padding: 40px;
  background: #ffffff;
`

const Form = styled.form`
  width: 405px;
  height: 450px;
  position: relative;
  margin: 0 auto;
`

const Header = styled.div`
  font-size: 40px;
  margin-bottom: 20px;
  display: block;
  color: #1e1e1e;
  text-align: center;
`
const SubHeader = styled(Header)`
  text-align: center;
  font-size: 16px;
  display: block;
  margin-bottom: 40px;
`

const FormGroup = styled.div``

const TextInputWrapper = styled.div`
  width: 100%;
`

const HintText = styled.div`
  font-size: 12px;
  color: #1e1e1e;
  width: 100%;
  margin: 0px 0px 25px 0px;
  padding-left: 20px;
  display: block;
`
const ErrorText = styled(HintText)`
  color: red;
`

const TermsConditions = styled.div`
  position: absolute;
  font-size: 11px;
`

const LessCommonError = styled.div`
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

class ContactInfo extends Component {
  state = {
    nameError: false,
    emailError: false,
    passwordError1: false,
    passwordError2: false,
    jobTitleError: false,
    phoneError: false,
  }

  checkEmail = () => {
    let { email } = this.props
    let result = emailFn(email)
    this.setState({ emailError: !result })
  }

  checkName = () => {
    let { firstName, lastName } = this.props
    let fullName = firstName + lastName
    let result = nameFn(fullName)
    this.setState({ nameError: !result })
  }

  checkPassword = () => {
    let { password, confirmPassword } = this.props
    let result = passwordFn(password, confirmPassword)
    if (result === 'No match') {
      this.setState({ passwordError1: true, passwordError2: false })
    } else {
      this.setState({ passwordError1: false, passwordError2: !result })
    }
  }

  checkPhone = () => {
    let {phone} = this.props;
    let result = phoneFn(phone);
    this.setState({
      phoneError: !result
    })
  }

  checkJobTitle = () => {
    let {jobTitle} = this.props;
    let result = jobTitleFn(jobTitle);
    this.setState ({
        jobTitleError: !result
    })
  }

  nextClick = (e) => {
    e.preventDefault();
    let checkState = document.getElementById("checkbox");
    if(checkState.checked &&
      !this.state.emailError &&
      !this.state.nameError &&
      !this.state.phoneError &&
      !this.state.jobTitleError &&
      !this.state.passwordError1 &&
      !this.state.passwordError2){
        let {firstName, lastName, email, phone, jobTitle, password} = this.props;
        let formattedPhone = phone.replace(/\D/ig,'')
        let obj = {first_name: firstName, last_name: lastName, email, phone: formattedPhone, job_title: jobTitle, password}
          axios.post(`/api/register/venue/contact`, obj).then(res =>{
            this.props.contactInfoCompleteFn();
      })
      }
  }

  render() {

    let agreementError

    let subText
    if (!this.state.passwordError1 && !this.state.passwordError2) {
      subText = (
        <HintText>
          Use 8 or more characters with a mix of uppercase & lowercase letters,
          numbers & symbols.
        </HintText>
      )
    } else {
      if (this.state.passwordError1 && !this.state.passwordError2) {
        subText = <ErrorText>Hmm.. try matching them again.</ErrorText>
      } else if (!this.state.passwordError1 && this.state.passwordError2) {
        subText = (
          <ErrorText>
            Please use 8 or more characters with a mix of uppercase & lowercase
            letters, numbers & symbols.
          </ErrorText>
        )
      } else {
        subText = <ErrorText>Hmm.. try matching them again.</ErrorText>
      }
    }

    return (
      <RegisterContainer>
        <Header>Create An Account</Header>
        <SubHeader>
          At Soundcheq, venues get access to their customers in ways never
          before possible.
        </SubHeader>
        <Form>
          <FormGroup>
            <TextInputWrapper>
              <TextInput
                marginRight={'10px'}
                name={'firstName'}
                width={'50%'}
                placeholder={'First Name'}
                value={this.props.firstName}
                type={'text'}
                updateFn={this.props.handleVenueRegistrationInput}
                required={'required'}
                minLength={"3"}
                maxLength={"30"}
                onBlur={this.checkName}
              />
              <TextInput
                width={'calc(50% - 10px)'}
                name={'lastName'}
                placeholder={'Last Name'}
                type={'text'}
                updateFn={this.props.handleVenueRegistrationInput}
                required={'required'}
                minLength={"3"}
                maxLength={"30"}
                onBlur={this.checkName}
              />
              <LessCommonError error={this.state.nameError}>
                <span>Are you sure you typed your name in right?</span>
              </LessCommonError>
            </TextInputWrapper>
          </FormGroup>

          <TextInputWrapper>
            <TextInput
              name={'email'}
              placeholder={'Email'}
              type={'text'}
              updateFn={this.props.handleVenueRegistrationInput}
              required={'required'}
              onBlur={this.checkEmail}
            />
            {!this.state.emailError ? (
              <HintText>You'll use this to sign in later.</HintText>
            ) : (
              <ErrorText>
                Are you sure you entered your correct email?
              </ErrorText>
            )}
          </TextInputWrapper>
          <FormGroup>
            <TextInput
              marginRight={'10px'}
              width={'50%'}
              name={'phone'}
              placeholder={'Phone'}
              type={'text'}
              onBlur={this.checkPhone}
              updateFn={this.props.handleVenueRegistrationInput}
              required={'required'}
            />
            <TextInput
              width={'calc(50% - 10px)'}
              name={'jobTitle'}
              placeholder={'Job Title'}
              type={'text'}
              maxLength='30'
              minLength='3'
              onBlur={this.checkJobTitle}
              updateFn={this.props.handleVenueRegistrationInput}
              required={'required'}
            />
            <LessCommonError error={this.state.phoneError}>
                <span>Are you sure you entered a correct phone number?</span>
              </LessCommonError>
          </FormGroup>
          <FormGroup>
            <TextInputWrapper>
              <TextInput
                marginRight={'10px'}
                width={'50%'}
                name={'password'}
                placeholder={'Password'}
                type={'password'}
                updateFn={this.props.handleVenueRegistrationInput}
                required={'required'}
              />

              <TextInput
                width={'calc(50% - 10px)'}
                name={'confirmPassword'}
                placeholder={'Confirm Password'}
                type={'password'}
                updateFn={this.props.handleVenueRegistrationInput}
                required={'required'}
                onBlur={this.checkPassword}
              />
              {subText}
            </TextInputWrapper>
          </FormGroup>

          <TermsConditions>
            {/* Make a link to terms */}
            <input type="checkbox" id="checkbox"></input>
            I agree to the Soundcheq <a href={'terms'}>Terms and Conditions Agreement</a>
          </TermsConditions>

          {agreementError}

          <FormButton
            title={'NEXT'}
            position={'absolute'}
            bottom={'0px'}
            right={'0px'}
            marginTop={'0px'}
            onClickFn={(e) => {this.nextClick()}}
          />
        </Form>
      </RegisterContainer>
    )
  }
}

function mapStateToProps(state) {
  const { firstName, lastName, jobTitle, email, phone, password, confirmPassword, contactInfoComplete } = state.venueFormReducer
  return { firstName, lastName, jobTitle, email, phone, password, confirmPassword, contactInfoComplete }
}

export default connect( mapStateToProps, { handleVenueRegistrationInput, contactInfoCompleteFn } )( ContactInfo );
