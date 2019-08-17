import React, { Component } from 'react'
import styled from 'styled-components'

class Home extends Component {
  state = {}
  render() {
    return (
      <Container>
        <Headline>Headline</Headline>
        <Content className="container">Content</Content>
        <Footer>Footer</Footer>
      </Container>
    )
  }
}

const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
`

const Headline = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  background: lightblue;
`

const Content = styled.div`
  flex: 1;
  background: lightgreen;
`

const Footer = styled.div`
  height: 200px;
  background: lightpink;
`

export default Home
