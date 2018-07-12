import React from "react"
import { Switch, Route } from "react-router-dom"
import HomePage from "./Components/HomePage"
import Auth from "./Components/AuthPage/Auth"

export default (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/auth" component={Auth} />
    {/* Import your routes */}
  </Switch>
)
