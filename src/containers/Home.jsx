import React from 'react'
import styled from 'styled-components'

import Headline from 'components/Headline'
import Content from 'components/Content'
import Footer from 'components/Footer'

function Home() {
  return (
    <Container>
      <Headline />
      <Content />
      <Footer />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  font-family: 'Roboto Slab', serif;
`

export default Home
