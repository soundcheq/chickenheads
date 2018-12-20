import React, { Component } from 'react'
import styled from 'styled-components'

const Select = styled.select`
  height: 40px;
  width: ${props => (props.width ? props.width : '100%')};
  border: none;
  padding: 0px 20px;
  font-size: 16px;
  color: #343535;
  background-color: #e9e9e9;
  margin-bottom: ${props => props.marginBottom ? props.marginBottom : '25px'} ;
  margin-right: ${props => props.marginRight ? props.marginRight : '0px'}};
  &:focus {
    outline: none;
  }
  &:invalid {
    font-style: italic;
    color: #696a69;
  }
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
      marginBottom,
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
          <option hidden selected value="">State</option>
          <option value="AL">Alabama</option>
	        <option value="AK">Alaska</option>
	        <option value="AZ">Arizona</option>
	        <option value="AR">Arkansas</option>
	        <option value="CA">California</option>
	        <option value="CO">Colorado</option>
	        <option value="CT">Connecticut</option>
	        <option value="DE">Delaware</option>
	        <option value="DC">District Of Columbia</option>
	        <option value="FL">Florida</option>
	        <option value="GA">Georgia</option>
	        <option value="HI">Hawaii</option>
	        <option value="ID">Idaho</option>
	        <option value="IL">Illinois</option>
	        <option value="IN">Indiana</option>
	        <option value="IA">Iowa</option>
	        <option value="KS">Kansas</option>
	        <option value="KY">Kentucky</option>
	        <option value="LA">Louisiana</option>
	        <option value="ME">Maine</option>
	        <option value="MD">Maryland</option>
	        <option value="MA">Massachusetts</option>
	        <option value="MI">Michigan</option>
	        <option value="MN">Minnesota</option>
	        <option value="MS">Mississippi</option>
	        <option value="MO">Missouri</option>
	        <option value="MT">Montana</option>
	        <option value="NE">Nebraska</option>
	        <option value="NV">Nevada</option>
	        <option value="NH">New Hampshire</option>
	        <option value="NJ">New Jersey</option>
	        <option value="NM">New Mexico</option>
	        <option value="NY">New York</option>
	        <option value="NC">North Carolina</option>
	        <option value="ND">North Dakota</option>
	        <option value="OH">Ohio</option>
	        <option value="OK">Oklahoma</option>
	        <option value="OR">Oregon</option>
	        <option value="PA">Pennsylvania</option>
	        <option value="RI">Rhode Island</option>
	        <option value="SC">South Carolina</option>
	        <option value="SD">South Dakota</option>
	        <option value="TN">Tennessee</option>
	        <option value="TX">Texas</option>
	        <option value="UT">Utah</option>
	        <option value="VT">Vermont</option>
	        <option value="VA">Virginia</option>
	        <option value="WA">Washington</option>
	        <option value="WV">West Virginia</option>
	        <option value="WI">Wisconsin</option>
	        <option value="WY">Wyoming</option>
      </Select>
    )
  }
}

export default StateInput