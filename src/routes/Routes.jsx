import React from 'react'
import { Switch, Route } from 'react-router-dom'
import FooterRoute from './FooterRoute'

// routes
import Home from 'containers/Home'
import About from 'containers/About'
import Pomeranian from 'containers/Pomeranian'
import NotFound from '../containers/NotFound'

const Routes = () => (
  <Switch>
    <Route path="/" exact={true} component={Home} />
    <Route path="/home" exact={true} component={Home} />
    <Route path="/about" exact={true} component={About} />
    <Route path="/pomeranian" exact={true} component={Pomeranian} />
    <Route component={NotFound} />
  </Switch>
)

export default Routes
