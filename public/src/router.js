import React from 'react'
import { Switch, Route } from 'react-router-dom'
import VenueLogin from './components/VenueLogin'
import Dashboard from './components/Dashboard'
import Calendar from './components/Calendar/Calendar'

export default (
  <Switch>
    <Route path="/venuelogin" component={VenueLogin} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/calendar" component={Calendar} />
    {/* Import your routes */}
  </Switch>
)
