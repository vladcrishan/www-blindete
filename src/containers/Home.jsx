import React from 'react'
import styled from 'styled-components'

import Headline from 'components/Headline'
import Content from 'components/Content'

function Home() {
  return (
    <SHome>
      <Headline />
      <Content />
    </SHome>
  )
}

const SHome = styled.div`
  font-family: 'Roboto Slab', serif;
`

export default Home
