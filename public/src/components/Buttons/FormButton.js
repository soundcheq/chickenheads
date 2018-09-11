import React, { Component } from 'react'
import styled from 'styled-components'

const Button = styled.button`
  height: 45px;
  width: 144px;
  color: #ffffff;
  background: #469f56;
  font-size: 16px;
  border-radius: 5px;
  align-self: flex-end;
  margin-top: ${props => (props.marginTop ? props.marginTop : '10px')};
  position: ${props => (props.position ? props.position : 'static')};
  bottom: ${props => (props.bottom ? props.bottom : 'auto')};
  right: ${props => (props.right ? props.right : 'auto')};
`

class FormButton extends Component {
  render() {
    return (
      <Button
        onClick={this.props.onClickFn}
        type={this.props.type}
        position={this.props.position}
        bottom={this.props.bottom}
        right={this.props.right}
        marginTop={this.props.marginTop}
      >
        {this.props.title}
      </Button>
    )
  }
}

export default FormButton
