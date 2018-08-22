import React, { Component } from 'react'
import styled from 'styled-components'

export default class TopUserData extends Component {
  render() {
    return (
      <ProfileStats>
        <Stats>Top City FORTLAUDERDALE</Stats>
        <Stats>Top Venue REVOLUTION</Stats>
        <Stats>Total Reviews: 24</Stats>
        <Stats>Total Check-ins: 56</Stats>
      </ProfileStats>
    )
  }
}

const ProfileStats = styled.section`
  background: white;
  width: 250px;
`

const Stats = styled.div`
  padding: 10px;
`
