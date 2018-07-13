import React from "react"
import { Switch, Route } from "react-router-dom"
import HomePage from "./Components/HomePage"
import VenueLogin from "./Components/venueLogin/VenueLogin"
import Dashboard from "./Components/Dashboard/Dahsboard"

export default (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/venuelogin" component={VenueLogin} />
    <Route path="/dashboard" component={Dashboard} />
    {/* Import your routes */}
  </Switch>
)
