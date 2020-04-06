import { Link } from 'gatsby'
import styled from 'styled-components'
import React from 'react'

export default ({ siteTitle }) => (
  <Container>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </Container>
)

const Container = styled.header`
  background: rebeccapurple;
  marginbottom: 1.45rem;
`
