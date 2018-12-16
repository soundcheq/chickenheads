import React, { Component } from 'react'
import styled from 'styled-components'

const Select = styled.select`
  height: 40px;
  width: ${props => (props.width ? props.width : '100%')};
  border: none;
  border-radius: 2px;
  padding: 0px 20px;
  font-size: 16px;
  color: #343535;
  background-color: #e9e9e9;
  margin-bottom: ${props => props.marginBottom ? props.marginBottom : '25px'} ;
  margin-right: ${props => props.marginRight ? props.marginRight : '0px'}};
  &::placeholder {
    color: #6A6A6A;
    font-style: italic;
  }
  &:focus {
    outline: none;
  }
`

const Option = styled.option`
  font-size: 16px;
  background-color: #e9e9e9;
  color: #6A6A6A;
`

const Hidden = styled.option`
  font-style: italic;
  background-color: purple;
`

class StateInput extends Component {
  render() {
    let {
      name,
      type,
      placeholder,
      updateFn,
      required,
      onFocus,
      onBlur,
      width,
      marginRight,
      marginBottom
    } = this.props
    return (
      <Select
        marginBottom={marginBottom}
        marginRight={marginRight}
        width={width}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={updateFn}
        required={required}
        onFocus={onFocus}
        onBlur={onBlur}>
            <Hidden value="" hidden>State</Hidden>
            <Option value="AL">Alabama</Option>
	        <Option value="AK">Alaska</Option>
	        <Option value="AZ">Arizona</Option>
	        <Option value="AR">Arkansas</Option>
	        <Option value="CA">California</Option>
	        <Option value="CO">Colorado</Option>
	        <Option value="CT">Connecticut</Option>
	        <Option value="DE">Delaware</Option>
	        <Option value="DC">District Of Columbia</Option>
	        <Option value="FL">Florida</Option>
	        <Option value="GA">Georgia</Option>
	        <Option value="HI">Hawaii</Option>
	        <Option value="ID">Idaho</Option>
	        <Option value="IL">Illinois</Option>
	        <Option value="IN">Indiana</Option>
	        <Option value="IA">Iowa</Option>
	        <Option value="KS">Kansas</Option>
	        <Option value="KY">Kentucky</Option>
	        <Option value="LA">Louisiana</Option>
	        <Option value="ME">Maine</Option>
	        <Option value="MD">Maryland</Option>
	        <Option value="MA">Massachusetts</Option>
	        <Option value="MI">Michigan</Option>
	        <Option value="MN">Minnesota</Option>
	        <Option value="MS">Mississippi</Option>
	        <Option value="MO">Missouri</Option>
	        <Option value="MT">Montana</Option>
	        <Option value="NE">Nebraska</Option>
	        <Option value="NV">Nevada</Option>
	        <Option value="NH">New Hampshire</Option>
	        <Option value="NJ">New Jersey</Option>
	        <Option value="NM">New Mexico</Option>
	        <Option value="NY">New York</Option>
	        <Option value="NC">North Carolina</Option>
	        <Option value="ND">North Dakota</Option>
	        <Option value="OH">Ohio</Option>
	        <Option value="OK">Oklahoma</Option>
	        <Option value="OR">Oregon</Option>
	        <Option value="PA">Pennsylvania</Option>
	        <Option value="RI">Rhode Island</Option>
	        <Option value="SC">South Carolina</Option>
	        <Option value="SD">South Dakota</Option>
	        <Option value="TN">Tennessee</Option>
	        <Option value="TX">Texas</Option>
	        <Option value="UT">Utah</Option>
	        <Option value="VT">Vermont</Option>
	        <Option value="VA">Virginia</Option>
	        <Option value="WA">Washington</Option>
	        <Option value="WV">West Virginia</Option>
	        <Option value="WI">Wisconsin</Option>
	        <Option value="WY">Wyoming</Option>
      </Select>
    )
  }
}

export default StateInput