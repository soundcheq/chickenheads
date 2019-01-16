import React, { Component } from 'react';
import styled from 'styled-components';
import './LeftNavMenu.css';
import { Link } from "react-router-dom";

//Images

import globe from '../../../../assets/globe.png'
import email from '../../../../assets/email.png'
import events from '../../../../assets/events.png'
import gear from '../../../../assets/gear.png'
import logout from '../../../../assets/logout.png'
import pin from '../../../../assets/pin-hi-res.png'
import trophy from '../../../../assets/trophy.png'
import arrow from '../../../../assets/arrow.png'


export default class LeftNavMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {

    let drawerClasses = 'side-drawer';
    if (this.props.show === true) {
      drawerClasses = 'side-drawer open';
    }


    return (

      <nav className={drawerClasses}>

        <Link to="/user/trending">
           <Button>
              <Icon src={globe} />
              Trending
              <img src={arrow} style={{ height: "16px", marginLeft: "50px" }} />
           </Button>
        </Link>


        <Link to="/user/myevents">
          <Button>
            <Icon src={events} />
            My Events
            <img src={arrow} style={{ height: "16px", marginLeft: "34px" }} />
          </Button>
        </Link>


        <Link to="/user/checkin">
          <Button>
            <Icon src={pin} />
            Check In
            <img src={arrow} style={{ height: "16px", marginLeft: "54px" }} />
          </Button>
        </Link>

        <Button>
          <Icon src={trophy} />
          Rewards
          <img src={arrow} style={{ height: "16px", marginLeft: "58px" }} />
        </Button>

        <Spacer />

        <hr />
        <ButtonTwo><Icon src={gear} />Settings</ButtonTwo>
        <hr />
        <ButtonTwo><Icon src={email} />Send Feedback</ButtonTwo>
        <hr />
        <ButtonTwo><Icon src={logout} />Log Out</ButtonTwo>
        <hr />

      </nav>

    );
  }
}

const Button = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 65px;
  color: white;
  font-size: 28px;
  font-family: 'ProximaNova';
  letter-spacing: 2px;
  margin-top: 40px;
  margin-left: 20px
`

const Spacer = styled.div`
  height: 80px;
`

const ButtonTwo = styled(Button)`
  height: 50px;
  margin: auto 0px auto 20px;
`

const Icon = styled.img`
  height: 42px;
  width: auto;
  margin-right: 24px;
`
