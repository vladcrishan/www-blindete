// Leave it here just in case I change my mind and want to use navbar

import React from 'react'
import { Route } from 'react-router-dom'
import Navbar from 'components/Navbar'
import styled from 'styled-components'

const NavRoute = props => (
  <React.Fragment>
    <Navbar />
    <Page>
      <Route {...props} />
    </Page>
  </React.Fragment>
)

const Page = styled.section`
  /* max-width: 935px; */
  /* margin: auto; */
  padding-top: 105px;
  /* padding-left: 16px; */
  /* padding-right: 16px; */
  background: #dcaec7;
`

export default React.memo(NavRoute)
