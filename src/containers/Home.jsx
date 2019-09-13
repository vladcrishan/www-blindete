import React from 'react'
import styled from 'styled-components'

import Headline from 'components/Headline'
import Content from 'components/Content'
import Footer from 'components/Footer'

function Home() {
  return (
    <SHome>
      <Headline />
      <Content />
      {/* <Footer /> */}
    </SHome>
  )
}

const SHome = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  font-family: 'Roboto Slab', serif;
`

export default Home
