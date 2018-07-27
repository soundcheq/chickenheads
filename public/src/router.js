import React from 'react'
import { Switch, Route } from 'react-router-dom'
import VenueLogin from './components/VenueLogin'
import Dashboard from './components/Dashboard'

export default (
  <Switch>
    <Route path="/venuelogin" component={VenueLogin} />
    <Route path="/dashboard" component={Dashboard} />
    {/* Import your routes */}
  </Switch>
)
