import React from 'react'
import Routes from 'routes/Routes'
import { BrowserRouter as Router } from 'react-router-dom'
import background from 'images/background/symphony.png'
import Footer from 'components/Footer'

export default () => (
  <div style={{ backgroundImage: `url(${background})` }}>
    <Router>
      <Routes />
    </Router>
    <Footer />
  </div>
)
