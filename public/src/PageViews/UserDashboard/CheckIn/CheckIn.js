//-----Packages-----//

import React, { Component } from 'react'
import styled from 'styled-components'

//-----Images-----//

import NavMenuButtonPNG from '../../../assets/NavMenuButton.png'
import QPointsPNG from '../../../assets/QPoints.png'

//-----Components-----//

import EventContainer from '../_Components/EventContainer'
import LeftNavMenu from '../_Components/Menus/LeftNavMenu'
import Backdrop from '../_Components/Backdrop'

//-----React Component-----//

//Note --- this component renders both the trending page and the filters menu

export default class Trending extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rsvpEvents : [1, 2, 3, 4, 5],
      navMenuVisible: false,
    }
  }

  leftNavClickHandler = () => {
    if(!this.state.filtersMenuVisible){
    this.setState((prevState) => {
      return { navMenuVisible: !prevState.navMenuVisible };
    })};
  };

  backdropClickHandler = () => {
    this.setState({
      navMenuVisible: false
    });
  };

  render() {

    let backdrop;
    if (this.state.navMenuVisible) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }

    let rsvpEventRender = this.state.rsvpEvents.map(event => {
      return <EventContainer eventInfo={dummyEvent} />
    }
  )

    return (
      <UserDashboardBackground>

        <LeftNavMenu show={this.state.navMenuVisible} />
        {backdrop}


        <UserDashboardTopBar>
          <NavMenuButton onClick={this.leftNavClickHandler}/>
          <TopBarLocation>Check In</TopBarLocation>
          <UserDashboardProfileButton>
            <QPoints>
              <Number>4200</Number>
              <QPointsImage />
            </QPoints>
         </UserDashboardProfileButton>
        </UserDashboardTopBar>

        {rsvpEventRender}


      </UserDashboardBackground>
    )
  }
}


//-----Styles-----//

const row = `
display: flex;
flex-direction: row;
align-items: center;
`

const UserDashboardBackground = styled.div`
overflow-x: hidden;
background-color: #FFFFFF;
width: 375px;
height: 100%;
`
const UserDashboardTopBar = styled.div`
width: 100%;
height: 60px;
background-color: #8F72C2;
${row}
justify-content: space-between;
`
const NavMenuButton = styled.div`
height: 60px;
width: 60px;
background-image: url(${NavMenuButtonPNG}); 
background-size: 110%;
background-color: #9D82CD;
background-repeat: no-repeat;
background-position: 50% 50%;
`

const QPoints = styled.div`
  width: 50px;
  height: 100%;
  display; flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`

const Number = styled.div`
  margin-top: 12px;
  color: #FFFFFF;
  font-size: 18px;
  letter-spacing: 2px;
  margin-bottom: -18px;
`

const QPointsImage = styled.div`
  height: 100%;
  width: auto;
  background-image: url(${QPointsPNG}); 
  background-size: 60%;
  background-repeat: no-repeat;
  background-position: 50% 50%;
`

const TopBarLocation = styled.div`
text-align: center;
font-size: 26px;
font-family: 'ProximaNova';
color: white;
letter-spacing: 2px;
`

const UserDashboardProfileButton = styled.div`
  height: 100%;
  margin-right: 10px;
  ${row}
`
//-----Styles-----//

//-----DummyEvent----//

const dummyEvent = {
  event_id: 1,
  name: 'Radiohead',
  description: `${lorem}`,
  start_day: 25,
  start_month: 'January',
  start_time: '8:00 PM',
  venue: "The Complex",
  end_day: 25,
  end_time: '11:59 PM',
  date_created: '2019-01-05',
  qp_value: 300,
  sound_tag_1: 'Indie',
  sound_tag_2: 'Rock',
  sound_tag_3: 'Live Band',
  dummy_distance: 3.2,
  event_image: 'http://thewilddetectives.com/wp-content/uploads/2016/06/RadioHead.jpg'

}

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`


//-----DummyEvent----//

