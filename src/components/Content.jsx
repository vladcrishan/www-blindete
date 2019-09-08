import React from 'react'
import styled from 'styled-components'
import i18n from 'utils/i18n'
import { connect } from 'react-redux'

// Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

function Content() {
  return (
    <SContent>
      <Container>
        <Row>
          <SCol sm={3}>
            <PomeranianLink border="light">
              <Card.Body>
                <Card.Title>Pomeranian</Card.Title>
              </Card.Body>
            </PomeranianLink>
          </SCol>
          <SCol sm={3}>
            <PersianLink border="light">
              <Card.Body>
                <Card.Title>Persian</Card.Title>
              </Card.Body>
            </PersianLink>
          </SCol>
          <SCol sm={3}>
            <AkhalTekeLink border="light">
              <Card.Body>
                <Card.Title>AkhalTeke</Card.Title>
              </Card.Body>
            </AkhalTekeLink>
          </SCol>
          <SCol sm={3}>
            <WhiteShepherdLink border="light">
              <Card.Body>
                <Card.Title>WhiteShepherd</Card.Title>
              </Card.Body>
            </WhiteShepherdLink>
          </SCol>
        </Row>
        <Row>
          <SCol md={4}>
            <Diamond border="light">
              <Card.Body>
                <Card.Title>Diamond</Card.Title>
              </Card.Body>
            </Diamond>
          </SCol>
          <SCol md={8}>
            <Description border="light">
              <Card.Body>
                <Card.Title>Description</Card.Title>
                <Card.Text>{i18n.t('welcome')}</Card.Text>
              </Card.Body>
            </Description>
          </SCol>
        </Row>
        <Row>
          <SCol md={6}>
            <FacebookLink border="light">
              <Card.Body>
                <Card.Title>Facebook 1</Card.Title>
              </Card.Body>
            </FacebookLink>
          </SCol>
          <SCol md={6}>
            <FacebookLink border="light">
              <Card.Body>
                <Card.Title>Facebook 2</Card.Title>
              </Card.Body>
            </FacebookLink>
          </SCol>
        </Row>
        {i18n.t('Content')}
      </Container>
    </SContent>
  )
}

const SContent = styled.div``

const PomeranianLink = styled(Card)`
  border-radius: 0px;
`

const PersianLink = styled(Card)`
  border-radius: 0px;
`

const AkhalTekeLink = styled(Card)`
  border-radius: 0px;
`

const WhiteShepherdLink = styled(Card)`
  border-radius: 0px;
`
const Diamond = styled(Card)`
  border-radius: 0px;
`

const Description = styled(Card)`
  border-radius: 0px;
`

const FacebookLink = styled(Card)`
  border-radius: 0px;
`

const SCol = styled(Col)`
  padding: 5px;
`

export default connect(
  state => ({
    language: state.internationalization.language
  }),
  null
)(Content)
