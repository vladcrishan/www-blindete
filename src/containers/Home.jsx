import React from 'react'
import styled from 'styled-components'
import i18n from 'utils/i18n'
import { withRouter } from 'react-router-dom'
import CardOverlay from 'components/CardOverlay'
import CardDescription from 'components/CardDescription'

// languages
import en from 'images/i18n/en.png'
import ro from 'images/i18n/ro.png'

// redux
import { compose } from 'redux'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as languageActions from 'state/ducks/languageDuck'

// bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// images
import pomeranianThumbnail from 'images/pomeranian/400x300/homeThumbnail.jpg'
import pomeranianFacebook from 'images/pomeranian/800x300/homeFacebook.jpg'
import chinchillaPersianThumbnail from 'images/chinchillaPersian/400x300/homeThumbnail.jpg'
import chinchillaPersianDiamond from 'images/chinchillaPersian/450x300/homeDiamond.jpg'
import chinchillaPersianFacebook from 'images/chinchillaPersian/800x300/homeFacebook.jpg'
import akhalTekeThumbnail from 'images/akhalTeke/400x300/homeThumbnail.jpg'
import whiteShepherdThumbnail from 'images/whiteShepherd/400x300/homeThumbnail.jpg'

function Home({ languageActions, history }) {
  const changeLanguage = async language => {
    try {
      i18n.locale = language
      await languageActions.setLanguage(i18n.locale)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <SHome>
      <Header>
        <Container>
          <Row>
            <Col>
              <Title>{i18n.t('company')}</Title>
              <Subtitle>{i18n.t('kennel&cattery')}</Subtitle>
            </Col>
            <Col className="d-flex justify-content-end align-items-end">
              <Language
                onClick={() => changeLanguage('en')}
                src={en}
                alt="language"
              />
              <Language
                onClick={() => changeLanguage('ro')}
                style={{ marginLeft: '10px' }}
                src={ro}
                alt="language"
              />
            </Col>
          </Row>
        </Container>
      </Header>

      <Content>
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
                onClick={() => history.push('/about')}
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
      </Content>
    </SHome>
  )
}

const Header = styled.div`
  font-family: 'Lobster', cursive;
  padding-top: 30px;
`

const Title = styled.div`
  color: #723155;
  font-size: 48px;
  font-weight: bold;
  text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9,
    0 5px 0 #aaa, 0 6px 1px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.1),
    0 1px 3px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2),
    0 5px 10px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.2),
    0 20px 20px rgba(0, 0, 0, 0.15);
`

const Subtitle = styled.div`
  letter-spacing: 0.1 em;
  font-weight: bold;
  color: #964070;
`

const Language = styled.img`
  height: 25px;
  :hover {
    cursor: pointer;
  }
`

const Content = styled.div`
  padding-top: 60px;
  padding-bottom: 100px;
`

const SCol = styled(Col)`
  padding: 5px;
`

const SHome = styled.div`
  font-family: 'Roboto Slab', serif;
`

export default compose(
  connect(
    state => ({
      language: state.internationalization.language
    }),
    dispatch => ({
      languageActions: bindActionCreators(languageActions, dispatch)
    })
  ),
  withRouter
)(Home)
