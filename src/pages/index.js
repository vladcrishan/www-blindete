import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import SplashScreen from '../components/splashScreen'
import { useStaticQuery, graphql } from 'gatsby'

export default () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <Layout title={data.site.siteMetadata.title}>
      <SplashScreen title={data.site.siteMetadata.title}>
        <SEO title="Home" />
        <Content></Content>
      </SplashScreen>
    </Layout>
  )
}

const Content = styled.div``
