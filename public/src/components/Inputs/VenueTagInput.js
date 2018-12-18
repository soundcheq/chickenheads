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
`

class VenueTagInput extends Component {
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

    let venueTypes = ["Nightclub", "Activities", "Lounge", "VIP", "Comedy Club", "Strip Club", "Disco", "Dive Bar", "Dance Club", "Ultra Lounge", "Big Bar", "Sports Bar", "Pub", "Hookah Lounge", "College Bar", "Live Venue", "Day Club", "Brew Pub", "Bar & Grille", "Casino", "Smoking Lounge", "Karaoke Bar", "Theatre", "Billiard Hall", "Speakeasy", "Restaurant Bar", "Gay Bar"]
    let venueOptions = venueTypes.map( venueType => {
      <Option value="{venueType}">{venueType}</Option>
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
            <Hidden value="" hidden>Venue Tag</Hidden>
            {venueOptions}
      </Select>
    )
  }
}

export default VenueTagInput