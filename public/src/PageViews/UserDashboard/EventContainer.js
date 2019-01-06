import React, { Component } from 'react'
import styled from 'styled-components'
import points from '../../assets/qp-white.png'
import musicIcon from '../../assets/music-icon.png'
import pin from '../../assets/pin.png'


export default class EventContainer extends Component {
    constructor(props){
      super(props)
      this.state = {
          
      }
    }

    render(){

        let {
            event_id,
            name,
            description,
            start_day,
            start_month,
            start_time,
            venue,
            end_day,
            end_time,
            date_created,
            qp_value,
            sound_tag_1,
            sound_tag_2,
            sound_tag_3,
            dummy_distance,
            event_image} = this.props.eventInfo;

        return(
            <EventWrapper style={{backgroundImage: `url(${event_image})`}}>
                <EventWrapperOverlay/>
                <Date>{start_month} {start_day}</Date>
                <Points>
                    {qp_value}
                    <img src={points} style={{height: "14px", marginBottom: "2px", marginLeft: "2px"}}alt="q-points"/>   
                </Points>
                <EventName>{name}</EventName>
                <VenueName>{venue}</VenueName>
                <MusicIcon src={musicIcon}/>
                <TagContainer>
                    <Tag>{sound_tag_1}</Tag>
                    <Tag>{sound_tag_2}</Tag>
                    <Tag>{sound_tag_3}</Tag>
                </TagContainer>
                <DistanceContainer>
                    <Pin src={pin} alt="distance"/>
                    {dummy_distance} mi
                </DistanceContainer>
                {/* <GetMore/> */}
            </EventWrapper>
            

        )
    }
}

const EventWrapper = styled.div`
width: 100%;
height: 200px;
background-size: 100%;
background-repeat: no-repeat;
background-position: 50% 50%;
box-shadow: inset 0 0 500px black;
background-color: #9D82CD;
`

const Date = styled.div`
position: relative;
bottom: 190px;
left: 10px;
color: white;
font-size: 16px;
letter-spacing: 2px;
`

const Points = styled.div`
position: relative;
bottom: 187px;
left: 10px;
color: white;
font-size: 16px;
letter-spacing: 2px;
display: flex;
flex-direction: row;
align-items: center;
`

const EventName = styled.div`
position: relative;
bottom: 125px;
left: 12px;
color: white;
font-size: 34px;
letter-spacing: 2px;
display: flex;
flex-direction: row;
align-items: center;
`

const VenueName = styled.div`
background-color: #00000050;
width: 130px;
white-space: nowrap;
position: relative;
bottom: 125px;
left: 12px;
color: #13BAD5;
font-size: 18px;
font-weight: bold;
letter-spacing: 2px;
display: flex;
flex-direction: row;
align-items: center;
`

const EventWrapperOverlay=styled.div`
width: 100%
height: 100%
z-index: 2;
background-color: #9E83CD;
opacity: 0.25;
`

const MusicIcon = styled.img`
height: 18px;
margin-left: 10px;
position: relative;
bottom: 115px;
`

const TagContainer = styled.div`
position: relative;
bottom: 140px
left: 40px;
display: flex;
flex-direction: row;
align-items: center;
`

const Tag = styled.div`
    color: white;
    background-color: #9D82CD95;
    padding: 4px;
    border-radius: 10%;
    margin-right: 10px;
`

const DistanceContainer = styled.div`
    color: white;
    position: relative;
    bottom: 170px;
    left: 290px;
`

const Pin = styled.img`
    height: 24px;
    margin-right: 5px;
`