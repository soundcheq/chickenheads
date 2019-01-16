import React from 'react'
import { Switch, Route } from 'react-router-dom'
import VenueLogin from './PageViews/VenueLogin/VenueLogin'
import Dashboard from './PageViews/Dashboard/Dashboard'
import Calendar from './PageViews/Calendar/Calendar'
import SplashPage from './PageViews/SplashPage/SplashPageView'
import VenueRegister from './PageViews/VenueRegister/VenueRegister'
import VenueUser from './PageViews/UserRegister/UserRegister'
import Trending from './PageViews/UserDashboard/Trending/Trending'
import CheckIn from './PageViews/UserDashboard/CheckIn/CheckIn'
import MyEvents from './PageViews/UserDashboard/MyEvents/MyEvents'

export default (
  <Switch>
    <Route exact path="/" component={SplashPage} />
    <Route exact path="/user/trending" component={Trending} />
    <Route exact path="/user/checkin" component={CheckIn} />
    <Route exact path="/user/myevents" component={MyEvents} />
    <Route path="/venuelogin" component={VenueLogin} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/calendar" component={Calendar} />
    <Route path="/register/venue" component={VenueRegister} />
    <Route path="/register/user" component={VenueUser} />
    {/* Import your routes */}
  </Switch>
)
