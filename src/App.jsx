import React from 'react'
import Routes from 'routes/Routes'
import { BrowserRouter as Router } from 'react-router-dom'
import background from 'images/misc/symphony.png'
import Footer from 'components/Footer'
import styled from 'styled-components'

export default () => (
  <Background>
    <Router>
      <Routes />
    </Router>
    <Footer />
  </Background>
)

const Background = styled.div`
  background-image: url(${background});
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: 'Roboto Slab', serif;
`
