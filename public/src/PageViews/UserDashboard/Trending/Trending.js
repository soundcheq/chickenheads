//-----Packages-----//

import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'

//-----Images-----//

import NavMenuButtonPNG from '../../../assets/NavMenuButton.png'
import FilterMenuButtonPNG from '../../../assets/FilterButton.png'
import SearchIconPNG from '../../../assets/search.png'
import QPointsPNG from '../../../assets/QPoints.png'
import Jigglypuff from '../../../assets/jigglypuff.jpg'

//-----Components-----//

import EventContainer from '../_Components/EventContainer'
import Backdrop from '../_Components/Backdrop'
import LeftNavMenu from '../_Components/Menus/LeftNavMenu'
import FilterMenu from '../_Components/Menus/FilterMenu'

//-----React Component-----//

//Note --- this component renders both the trending page and the filters menu

export default class Trending extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null,
      location: 84101,
      trendingEvents: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      eventsData: null,
      navMenuVisible: false,
      filtersMenuVisible: false,
    }
  }

  componentDidMount() {
    axios.get("/api/events").then(response => {
      this.setState({
        eventsData: response.body
      });
    })
  }

  leftNavClickHandler = () => {
    if(!this.state.filtersMenuVisible){
    this.setState((prevState) => {
      return { navMenuVisible: !prevState.navMenuVisible };
    })};
  };

  filterClickHandler = () => {
    this.setState((prevState) => {
      return { filtersMenuVisible: !prevState.filtersMenuVisible }
    })
  }

  backdropClickHandler = () => {
    this.setState({
      navMenuVisible: false
    });
  };


  render() {

    let yValue;
    if (this.state.filtersMenuVisible){
      yValue = "hidden"
    } else {
      yValue = "auto"
    }

    let backdrop;
    if (this.state.navMenuVisible) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }

    let title;
    if (this.state.filtersMenuVisible) {
      title = `Filters`
    } else { title = 'Trending' }


// Uncomment and comment out above to hide profile info filter menu open

    // let profileArea;
    // if (this.state.filtersMenuVisible) {
    //   profileArea =
    //     <UserDashboardProfileButton>
    //       <CloseButton/>
    //     </UserDashboardProfileButton>
    // } else {
    //   profileArea =
    //     <UserDashboardProfileButton>
    //       <QPoints>
    //         <Number>4200</Number>
    //         <QPointsImage />
    //       </QPoints>
    //       <ProfilePicture />
    //     </UserDashboardProfileButton>
    // }


    let trendingEventsRender = this.state.trendingEvents.map(event => {
      return <EventContainer eventInfo={dummyEvent} />
    })

    return (
      <UserDashboardBackground style={{ overflowY : `${yValue}`}}>
        <LeftNavMenu show={this.state.navMenuVisible} />
        <FilterMenu show={this.state.filtersMenuVisible} />
        {backdrop}

        <StickyTopArea>
        <UserDashboardTopBar>
          <NavMenuButton onClick={this.leftNavClickHandler}/>
          <FilterMenuButton onClick={this.filterClickHandler} />
          <TopBarLocation>{title}</TopBarLocation>
          {/* {profileArea} */}
             <UserDashboardProfileButton>
           <QPoints>
             <Number>4200</Number>
             <QPointsImage />
           </QPoints>
           <ProfilePicture />
         </UserDashboardProfileButton>
        </UserDashboardTopBar>

        <SearchContainer>
          <SearchIcon />
          <LocationField
            placeholder="Salt Lake City, UT"
          />
          <ViewMapButton>View Map</ViewMapButton>
        </SearchContainer>
        </StickyTopArea>

        <EventWrapper>
        {trendingEventsRender}
        </EventWrapper>

      </UserDashboardBackground>
    )
  }
}


//-----Styles-----//

const StickyTopArea = styled.div`
    position: fixed;
    top: 0;
    z-index: 1;
    width: 100%;
`

const row = `
display: flex;
flex-direction: row;
align-items: center;
`

const UserDashboardBackground = styled.div`
overflow-x: hidden;
background-color: #8F72C2
width: 375px;
height: 100%;
`
const UserDashboardTopBar = styled.div`
top: 0;
z-index: 1;
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
margin-right: -5px;
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

const ProfilePicture = styled.div`
  background-image: url(${Jigglypuff}); 
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: 50% 50%; 
  background-color: #9E83CD;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin-left: 10px;
`

const FilterMenuButton = styled.div`
height: 60px;
width: 50px;
background-image: url(${FilterMenuButtonPNG}); 
background-size: 80%;
background-repeat: no-repeat;
background-position: 50% 50%;
margin-left: -26px;
`
const TopBarLocation = styled.div`
width: 120px;
text-align: center;
font-size: 26px;
font-family: 'ProximaNova';
font-weight: 100;
color: white;
letter-spacing: 2px;
`

const LocationField = styled.input`
height: 100%;
font-size: 20px;
margin-left: 10px;
  &::placeholder{
    color: #6A6A6A;
    letter-spacing: 1px;
}
`

const SearchIcon = styled.div`
margin-left: 10px;
height: 100%;
width: 30px;
background-image: url(${SearchIconPNG}); 
background-size: 80%;
background-repeat: no-repeat;
background-position: 50% 50%;
`

const UserDashboardProfileButton = styled.div`
  height: 100%;
  width: 100px;
  ${row}
`

const SearchContainer = styled.div`
z-index: 1;
background-color: #FFFFFF;
width: 100%;
height: 60px;
${row}
`

const ViewMapButton = styled.button`
width: 100px;
height: 40px;
background-color: #8F72C2;
border-radius: 5px;
color: white;
font-size: 12px;
border: none;
`

const EventWrapper = styled.div`
width : 100%;
margin-top: 120px;
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

