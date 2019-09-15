import React from 'react'
import { Switch, Route } from 'react-router-dom'
import FooterRoute from './FooterRoute'

// routes
import Home from 'containers/Home'
import About from 'containers/About'
import NotFound from '../components/NotFound'
import FooterRoute from './FooterRoute'

const Routes = () => (
  <Switch>
    <FooterRoute path="/" exact={true} component={Home} />
    <FooterRoute path="/home" exact={true} component={Home} />
    <FooterRoute path="/about" exact={true} component={About} />
    <Route component={NotFound} />
  </Switch>
)

export default Routes
