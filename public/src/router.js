import React from 'react'
import { Switch, Route } from 'react-router-dom'
import VenueLogin from './PageViews/VenueLogin/VenueLogin'
import Dashboard from './PageViews/Dashboard/Dashboard'
import Calendar from './PageViews/Calendar/Calendar'
import SplashPage from './PageViews/SplashPage/SplashPageView'
import VenueRegister from './PageViews/VenueRegister/VenueRegister';

export default (
  <Switch>
    <Route exact path="/" component={SplashPage} />
    <Route path="/venuelogin" component={VenueLogin} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/calendar" component={Calendar} />
    <Route path="/register/venue" component={VenueRegister}/>
    {/* Import your routes */}
  </Switch>
)
