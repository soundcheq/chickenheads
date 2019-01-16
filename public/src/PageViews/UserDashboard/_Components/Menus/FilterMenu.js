import React, { Component } from 'react';
import styled from 'styled-components';
import './FilterMenu.css';

//Images

import refresh from '../../../../assets/refresh.png'
import search from '../../../../assets/search.png'
import calendar from '../../../../assets/calendar.png'
import pin from '../../../../assets/pin-black.png'


export default class FilterMenu extends Component {
  constructor(props){
    super(props);
    this.state={
    }
  }

  render(){

    let drawerClasses = 'bottom-drawer';
    if (this.props.show === true) {
      drawerClasses = 'bottom-drawer open';
    }
    
    return (

      <nav className={drawerClasses}>

        <ResetWrapper>
          Filters
          {/* Refresh icon click returns filters to user defaults */}
          <Refresh src={refresh} alt="Reset Filters"/>
        </ResetWrapper>

        <Line/>

          <GridWrapper>
            Search:
            <FilterInput
              placeholder="Search Events"/>
            Date:
            <FilterInput
              placeholder="Today"/>
            Distance:
            <FilterInput
              placeholder="5 mi"/>
          </GridWrapper>

          <SearchIcon src={search}/>
          <DateIcon src={calendar}/>
          <PinIcon src={pin}/>

        <Line/>

          <TypesWrapper>
          <Title>Sound Type</Title>
            <TagWrapper><Circle/></TagWrapper>
            <TagWrapper><Circle/></TagWrapper>
            <TagWrapper><Circle/></TagWrapper>
          </TypesWrapper>

        <Line/>

        <TypesWrapper>
            <Title>Venue Type</Title>
            <TagWrapper><Circle/></TagWrapper>
            <TagWrapper><Circle/></TagWrapper>
            <TagWrapper><Circle/></TagWrapper>
        </TypesWrapper>

      <Line/>

      </nav>

  );
}
}

const GridWrapper = styled.div`
  margin: 30px 15px;
  display: grid;
  grid-template-columns: 1.2fr 2.3fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas: ". ." ". ." ". .";
  grid-row-gap: 20px;
  grid-column-gap: 5px;
  align-items: center;
  font-size: 18px;
`

const FilterInput = styled.input`
  width: 100%
  padding: 5px;
  font-size: 13px;
  padding-left: 35px;
`

const ResetWrapper = styled.div`
  display: flex;
  flex-direciton: row;
  align-items: center;
  font-size: 26px;
  margin-top: 15px;
  width: 100%;
  margin-left: 15px;
  color: #6A6A6A
`

const Refresh = styled.img`
  height: 40px;
  margin-left: 150px;
`

const Line = styled.div`
  margin-top: 15px;
  border-bottom: 1px solid #6A6A6A30;
`

const SearchIcon = styled.img`
  height: 15px;
  position: absolute;
  top: 108px;
  right: 165px;
`

const DateIcon = styled(SearchIcon)`
  top: 155px;
  height: 20px;
  right: 162px;
`

const PinIcon = styled(DateIcon)`
  top: 205px;
`

const TypesWrapper = styled.div`
  margin-left: 15px;
`

const Circle = styled.div`
  height: 10px;
  width: 10px;
  background-color: #83C944;
  border-radius: 50%
`

const TagWrapper = styled.div`
  margin: 30px 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Title = styled.div`
  margin-top: 20px;
`