import React, { Component } from 'react'
import styled from 'styled-components'

const ArrowBox = styled.div`
	position: absolute;
  height: 100px;
  width: 200px;
	background: #88b7d5;
	border: 1px solid #c2e1f5;
  margin-right: 10px;
  text-align: center;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;

  &::before {
    left: 100%;
	top: 25%;
	border: solid transparent;
	content: " ";
	height: 0;
	width: 0;
	position: absolute;
	pointer-events: none;
  border-color: rgba(194, 225, 245, 0);
	border-left-color: #c2e1f5;
	border-width: 9px;
	margin-top: -9px;

}
  }

  &::after{
    left: 100%;
	top: 25%;
	border: solid transparent;
	content: " ";
	height: 0;
	width: 0;
	position: absolute;
	pointer-events: none;
  border-color: rgba(136, 183, 213, 0);
	border-left-color: #88b7d5;
	border-width: 8px;
	margin-top: -8px;

  }
`

class PasswordIndicator extends Component {
  render() {
    return (
      <ArrowBox>
        Use at least 8 characters. Don't use a password from another site, or
        something too obvious like your pets name.
      </ArrowBox>
    )
  }
}

export default PasswordIndicator
