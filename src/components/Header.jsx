import React from 'react'
import styled from 'styled-components'
import i18n from 'utils/i18n'

// bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Header({ title }) {
  console.log(i18n.locale)
  return (
    <SHeader>
      <Container>
        <Row>
          <Col>
            <Title>{i18n.t('aboutUs')}</Title>
          </Col>
        </Row>
      </Container>
    </SHeader>
  )
}

const SHeader = styled.div`
  font-family: 'Lobster', cursive;
  padding-top: 30px;
`

const Title = styled.div`
  color: #723155;
  font-size: 48px;
  font-weight: bold;
`

export default Header
