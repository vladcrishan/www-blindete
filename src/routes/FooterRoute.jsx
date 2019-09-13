import React from 'react'
import { Route } from 'react-router-dom'
import Footer from '../components/Footer'

const FooterRoute = props => (
  <React.Fragment>
    <Route {...props} />
    <Footer />
  </React.Fragment>
)

export default React.memo(FooterRoute)
