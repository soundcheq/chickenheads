import React from "react"
import { Switch, Route } from "react-router-dom"
import VenueLogin from "./Components/venueLogin/VenueLogin"
import Dashboard from "./Components/Dashboard/Dahsboard"

export default (
  <Switch>
    <Route path="/venuelogin" component={VenueLogin} />
    <Route path="/dashboard" component={Dashboard} />
    {/* Import your routes */}
  </Switch>
)
