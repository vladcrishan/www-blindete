import React from 'react'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import pattern from '../images/background/symphony.png'

// routes
import Home from 'containers/Home'
import About from 'containers/About'
import NotFound from '../components/NotFound'
import Footer from 'components/Footer'

const Routes = () => (
  <React.Fragment>
    <Background>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/home" exact={true} component={Home} />
        <Route path="/about" exact={true} component={About} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Background>
  </React.Fragment>
)

const Background = styled.div`
  background-image: url(${pattern});
`

export default Routes
