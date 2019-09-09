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
import pomeranianThumbnail from '../images/pomeranian/400x300/thumbnail.jpg'
import pomeranianFacebook from '../images/pomeranian/800x300/facebook.jpg'
import chinchillaPersianThumbnail from '../images/chinchillaPersian/400x300/thumbnail.jpg'
import chinchillaPersianDiamond from '../images/chinchillaPersian/450x300/diamondHome.jpg'
import chinchillaPersianFacebook from '../images/chinchillaPersian/800x300/facebook.jpg'
import akhalTekeThumbnail from '../images/akhalTeke/400x300/thumbnail.jpg'
import whiteShepherdThumbnail from '../images/whiteShepherd/400x300/thumbnail.jpg'

function Content() {
  return (
    <SContent>
      <Container>
        <Row>
          <SCol sm={3}>
            <Card>
              <Card.Img
                src={pomeranianThumbnail}
                alt="Pomeranian Thumbnail"
                className="rounded-0"
              />
              <Overlay className="d-flex justify-content-center align-items-center">
                <OverlayTitle>{i18n.t('pomeranian')}</OverlayTitle>
              </Overlay>
            </Card>
          </SCol>
          <SCol sm={3}>
            <Card>
              <Card.Img
                src={whiteShepherdThumbnail}
                alt="White Shepherd Thumbnail"
                className="rounded-0"
              />
              <Overlay className="d-flex justify-content-center align-items-center">
                <OverlayTitle>{i18n.t('whiteShepherd')}</OverlayTitle>
              </Overlay>
            </Card>
          </SCol>
          <SCol sm={3}>
            <Card>
              <Card.Img
                src={chinchillaPersianThumbnail}
                alt="Chinchilla Persian Thumbnail"
                className="rounded-0"
              />
              <Overlay className="d-flex justify-content-center align-items-center">
                <OverlayTitle className="text-center">
                  {i18n.t('chinchillaPersian')}
                </OverlayTitle>
              </Overlay>
            </Card>
          </SCol>
          <SCol sm={3}>
            <Card>
              <Card.Img
                src={akhalTekeThumbnail}
                alt="Akhal Teke Thumbnail"
                className="rounded-0"
              />
              <Overlay className="d-flex justify-content-center align-items-center">
                <OverlayTitle>{i18n.t('akhalTeke')}</OverlayTitle>
              </Overlay>
            </Card>
          </SCol>
        </Row>
        <Row>
          <SCol md={4}>
            <Card>
              <Card.Img
                src={chinchillaPersianDiamond}
                alt="Diamond"
                className="rounded-0"
              />
              <Overlay className="d-flex justify-content-center align-items-center">
                <OverlayTitle>{i18n.t('aboutUs')}</OverlayTitle>
              </Overlay>
            </Card>
          </SCol>
          <SCol md={8} className="d-flex align-items-stretch">
            <Card>
              <Card.Body>
                <OverlayTitle>{i18n.t('welcomeTitle')}</OverlayTitle>
                <Card.Text>{i18n.t('welcomeDescription')}</Card.Text>
              </Card.Body>
            </Card>
          </SCol>
        </Row>
        <Row>
          <SCol md={6}>
            <Card>
              <Card.Img
                src={pomeranianFacebook}
                alt="Pomeranian Facebook"
                className="rounded-0"
              />
              <Overlay
                className="d-flex justify-content-center align-items-center"
                onClick={() =>
                  window.open(
                    'https://www.facebook.com/PomeranianBlindete/',
                    '_blank'
                  )
                }
              >
                <OverlayTitle>{i18n.t('facebook')}</OverlayTitle>
              </Overlay>
            </Card>
          </SCol>
          <SCol md={6}>
            <Card>
              <Card.Img
                src={chinchillaPersianFacebook}
                alt="Chinchilla Persian Facebook"
                className="rounded-0"
              />
              <Overlay
                className="d-flex justify-content-center align-items-center"
                onClick={() =>
                  window.open(
                    'https://www.facebook.com/ChinchillaBlindete/',
                    '_blank'
                  )
                }
              >
                <OverlayTitle>{i18n.t('facebook')}</OverlayTitle>
              </Overlay>
            </Card>
          </SCol>
        </Row>
      </Container>
    </SContent>
  )
}

const SContent = styled.div``

const SCol = styled(Col)`
  padding: 5px;
`

const Overlay = styled(Card.ImgOverlay)`
  color: #fff;
  background: #000;
  opacity: 0.3;
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

const OverlayTitle = styled(Card.Title)`
  font-size: 24px;
`

export default connect(
  state => ({
    language: state.internationalization.language
  }),
  null
)(Content)
