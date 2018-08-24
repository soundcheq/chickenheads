import React, { Component } from 'react'
import styled from 'styled-components'

const ArrowBox = styled.div`
	position: absolute;
  border-radius: 5px;
  height: 80px;
  width: 200px;
	background: #ffffff;
  color: #6A6A6A;
  margin-right: 10px;
  text-align: center;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);

  &::before {
    left: 100%;
	top: 25%;
	border: .5px solid transparent;
	content: " ";
	height: 0;
	width: 0;
	position: absolute;
	pointer-events: none;
	border-left-color: #ffffff;
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

	border-left-color: #ffffff;
	border-width: 8px;
	margin-top: -8px;

  }
`

class PasswordIndicator extends Component {
  render() {
    return (
      <ArrowBox>
        Use 8 or more characters with a mix of letters, numbers & symbols
      </ArrowBox>
    )
  }
}

export default PasswordIndicator
