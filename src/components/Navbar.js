import { Link } from 'gatsby'
import styled from 'styled-components'
import React from 'react'

export default ({ siteTitle }) => (
  <Container>
    <Title>{siteTitle}</Title>
    <Categories>
      <Category>Cats</Category>
      <Category>Dogs</Category>
      <Category>Contact</Category>
    </Categories>
  </Container>
)

const Container = styled.header`
  display: flex;
  padding: 1rem;
`

const Title = styled.div`
  font-size: 1.5rem;
`

const Categories = styled.div`
  display: flex;
  margin-left: auto;
`
const Category = styled.div`
  margin: 0 2.5rem;
`
