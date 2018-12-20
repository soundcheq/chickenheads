import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

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
&:focus {
  outline: none;
}
&:invalid {
  font-style: italic;
  color: #696a69;
}
`

class SoundTagInput extends Component {
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

    let soundTypes = ['House', 'EDM', 'Live Band', 'Top 40', 'Mash-Up', 'Ambient', 'Atmosphere', 'Hip-Hop', 'Latin Dance', 'Reggaeton', 'Rock', 'Country', 'Piano', 'Stand Up', 'Live Sports', 'Indie', 'Local Bands', 'Jukebox', 'DJ', 'Jazz']
    let soundOptions = soundTypes.map( soundType => {
      return(
        <option value={`${soundType}`}>{soundType}</option>
      )
    })

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
        <option hidden selected value="">Sound Tag</option>
            {soundOptions}
      </Select>
    )
  }
}

export default SoundTagInput