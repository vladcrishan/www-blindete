import React from 'react'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'

// routes
import Home from 'containers/Home'
import About from 'containers/About'
import NotFound from '../components/NotFound'
import Footer from 'components/Footer'

const Routes = () => (
  <React.Fragment>
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/home" exact={true} component={Home} />
      <Route path="/about" exact={true} component={About} />
      <Route component={NotFound} />
    </Switch>
    <Footer />
  </React.Fragment>
)

export default Routes
