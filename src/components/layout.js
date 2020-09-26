import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Georgia from '../fonts/Georgia.ttf'
import Navbar from './navbar'

export default ({ title, children }) => {
  return (
    <Content>
      <GlobalStyle />
      <Navbar siteTitle={title} />

      <main>{children}</main>
    </Content>
  )
}

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Georgia;
    src: url(${Georgia});
  }

`

const Content = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  font-size: 1.5rem;
  padding: 0 1.0875rem 1.45rem;
`
