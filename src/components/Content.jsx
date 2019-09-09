import React from 'react'
import styled from 'styled-components'
import i18n from 'utils/i18n'
import { connect } from 'react-redux'
import CardOverlay from './CardOverlay'
import CardDescription from './CardDescription'

// Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

// images
import pomeranianThumbnail from '../images/pomeranian/400x300/homeThumbnail.jpg'
import pomeranianFacebook from '../images/pomeranian/800x300/homeFacebook.jpg'
import chinchillaPersianThumbnail from '../images/chinchillaPersian/400x300/homeThumbnail.jpg'
import chinchillaPersianDiamond from '../images/chinchillaPersian/450x300/homeDiamond.jpg'
import chinchillaPersianFacebook from '../images/chinchillaPersian/800x300/homeFacebook.jpg'
import akhalTekeThumbnail from '../images/akhalTeke/400x300/homeThumbnail.jpg'
import whiteShepherdThumbnail from '../images/whiteShepherd/400x300/homeThumbnail.jpg'

function Content() {
  return (
    <SContent>
      <Container>
        <Row>
          <SCol md={3}>
            <CardOverlay
              imageSrc={pomeranianThumbnail}
              text={i18n.t('pomeranian')}
            />
          </SCol>
          <SCol md={3}>
            <CardOverlay
              imageSrc={whiteShepherdThumbnail}
              text={i18n.t('whiteShepherd')}
            />
          </SCol>
          <SCol md={3}>
            <CardOverlay
              imageSrc={chinchillaPersianThumbnail}
              text={i18n.t('chinchillaPersian')}
            />
          </SCol>
          <SCol md={3}>
            <CardOverlay
              imageSrc={akhalTekeThumbnail}
              text={i18n.t('akhalTeke')}
            />
          </SCol>
        </Row>
        <Row>
          <SCol md={4}>
            <CardOverlay
              imageSrc={chinchillaPersianDiamond}
              text={i18n.t('aboutUs')}
            />
          </SCol>
          <SCol md={8} className="d-flex align-items-stretch">
            <CardDescription
              title={i18n.t('welcomeTitle')}
              description={i18n.t('welcomeDescription')}
            />
          </SCol>
        </Row>
        <Row>
          <SCol md={6}>
            <CardOverlay
              imageSrc={pomeranianFacebook}
              text={i18n.t('facebook')}
              onClick={() =>
                window.open(
                  'https://www.facebook.com/PomeranianBlindete/',
                  '_blank'
                )
              }
            />
          </SCol>
          <SCol md={6}>
            <CardOverlay
              imageSrc={chinchillaPersianFacebook}
              text={i18n.t('facebook')}
              onClick={() =>
                window.open(
                  'https://www.facebook.com/ChinchillaBlindete/',
                  '_blank'
                )
              }
            />
          </SCol>
        </Row>
      </Container>
    </SContent>
  )
}

const SContent = styled.div`
  margin-bottom: 100px;
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
