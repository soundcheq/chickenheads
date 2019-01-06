import React, { Component } from 'react';
import styled from 'styled-components';
import './LeftNavMenu.css';

export default class LeftNavMenu extends Component {
  constructor(props){
    super(props);
    this.state={
    }
  }

  render(){

    let drawerClasses = 'side-drawer';
    if (this.props.show === true) {
      drawerClasses = 'side-drawer open';
    }
    
    return (

      <nav className={drawerClasses}>
        
        <Button><Globe/>Trending</Button>
        <Button><Notepad/>My Events</Button>
        <Button><Pin/>Check In</Button>
        <Button><Trophy/>Rewards</Button>

        <hr/>
        <Button><Gear/>Settings</Button>
        <hr/>
        <Button><Letter/>Send Feedback</Button>
        <hr/>
        <Button><LogOut/>Log Out</Button>
        <hr/>

      </nav>

  );
}
}

const Button = styled.div``
const Globe = styled.div``
const Notepad = styled.div``
const Pin = styled.div``
const Trophy = styled.div``
const Gear = styled.div``
const Letter = styled.div``
const LogOut = styled.div``
