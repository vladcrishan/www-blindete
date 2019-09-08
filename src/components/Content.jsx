import React from 'react'
import styled from 'styled-components'
import i18n from 'utils/i18n'
import { connect } from 'react-redux'

// Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

// images
import pomeranianThumbnail from '../images/pomeranian/thumbnail.jpg'
import persianThumbnail from '../images/persian/thumbnail.jpg'
import akhalTekeThumbnail from '../images/akhalTeke/thumbnail.jpg'
import whiteShepherdThumbnail from '../images/whiteShepherd/thumbnail.jpg'

function Content() {
  return (
    <SContent>
      <Container>
        <Row>
          <SCol sm={3}>
            <Card border="light">
              <Card.Img
                src={pomeranianThumbnail}
                alt="Pomeranian Thumbnail"
                className="rounded-0"
              />
              <Overlay className="d-flex justify-content-center align-items-center">
                <Card.Title>pomeranian</Card.Title>
              </Overlay>
            </Card>
          </SCol>
          <SCol sm={3}>
            <Card border="light">
              <Card.Img
                src={whiteShepherdThumbnail}
                alt="White Shepherd Thumbnail"
                className="rounded-0"
              />
              <Overlay className="d-flex justify-content-center align-items-center">
                <Card.Title>white shepherd</Card.Title>
              </Overlay>
            </Card>
          </SCol>
          <SCol sm={3}>
            <Card border="light">
              <Card.Img
                src={persianThumbnail}
                alt="Persian Thumbnail"
                className="rounded-0"
              />
              <Overlay className="d-flex justify-content-center align-items-center">
                <Card.Title>persian</Card.Title>
              </Overlay>
            </Card>
          </SCol>
          <SCol sm={3}>
            <Card border="light">
              <Card.Img
                src={akhalTekeThumbnail}
                alt="Akhal Teke Thumbnail"
                className="rounded-0"
              />
              <Overlay className="d-flex justify-content-center align-items-center">
                <Card.Title>akhal teke</Card.Title>
              </Overlay>
            </Card>
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
      </Container>
    </SContent>
  )
}

const SContent = styled.div``

const Overlay = styled(Card.ImgOverlay)`
  color: #fff;
  background: #000;
  opacity: 0.2;
  cursor: pointer;
  :hover {
    background: #fff;
    color: #000;
    opacity: 0.9;
    -webkit-transition: all 0.2s linear;
    -moz-transition: all 0.2s linear;
    -ms-transition: all 0.2s linear;
    -o-transition: all 0.2s linear;
    transition: all 0.2s linear;
  }
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
