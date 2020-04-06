import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Georgia from '../fonts/Georgia.ttf'
import { useStaticQuery, graphql } from 'gatsby'
import Navbar from './Navbar'

export default ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  console.log('data.site.metadata.title: ', data.site.siteMetadata.title)

  return (
    <Content>
      <GlobalStyle />
      <Navbar siteTitle={data.site.siteMetadata.title} />

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
  padding: 0 1.0875rem 1.45rem;

  font-size: 1.5rem;
  font-family: Georgia;
`
