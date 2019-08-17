import React from 'react'
import styled from 'styled-components'

import Headline from 'components/Headline'
import Content from 'components/Content'

class Home extends React.Component {
  render() {
    return (
      <Container>
        <Headline />
        <Content />
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

const Footer = styled.div`
  height: 200px;
  background: lightpink;
`

export default Home
