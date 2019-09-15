import React from 'react'
import i18n from 'utils/i18n'
import { Phone, Mail, MapPin, Facebook } from 'react-feather'
import styled from 'styled-components'

import en from '../images/i18n/en.png'
import ro from '../images/i18n/ro.png'

// redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as languageActions from 'state/ducks/languageDuck'

// bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Footer(languageActions) {
  const changeLanguage = async language => {
    try {
      i18n.locale = language
      await languageActions.languageActions.setLanguage(i18n.locale)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <SFooter>
      <Container>
        <Row>
          <MapWrapper sm={4}>
            <iframe
              title="bla"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6575.152104739471!2d21.315172160602422!3d46.14057140122728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47459936a785dd61%3A0xf39fbf4f1decef1!2sStrada%20Dumitru%20Bagdasar%2036%2C%20Arad!5e0!3m2!1sen!2sro!4v1568211287326!5m2!1sen!2sro"
              style={{ border: '0' }}
            ></iframe>
          </MapWrapper>
          <ContactWrapper sm={8} className="d-flex align-items-center">
            <Container>
              <Row>
                <Col sm={6}>
                  <DetailWrapper>
                    <Phone />
                    <Detail>+40 722 352 909</Detail>
                  </DetailWrapper>
                  <DetailWrapper>
                    <Mail />
                    <Detail>deblindete@gmail.com</Detail>
                  </DetailWrapper>
                  <DetailWrapper>
                    <MapPin size="30" />
                    <Detail>Str. Bagdasar Nr. 36 310231, Arad, România</Detail>
                  </DetailWrapper>
                </Col>
                <Col sm={6}>
                  <DetailFacebookWrapper
                    onClick={() =>
                      window.open(
                        'https://www.facebook.com/PomeranianBlindete/',
                        '_blank'
                      )
                    }
                  >
                    <Facebook />
                    <Detail>Pomeranian</Detail>
                  </DetailFacebookWrapper>
                  <DetailFacebookWrapper
                    onClick={() =>
                      window.open(
                        'https://www.facebook.com/ChinchillaBlindete/',
                        '_blank'
                      )
                    }
                  >
                    <Facebook />
                    <Detail>{i18n.t('chinchillaPersian')}</Detail>
                  </DetailFacebookWrapper>
                </Col>
              </Row>
            </Container>
          </ContactWrapper>
        </Row>
        <BottomRow style={{ paddingTop: '10px' }}>
          <Col style={{ paddingLeft: '0px' }}>
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
          <Copyright className="d-flex justify-content-end align-items-end">
            © 2020 Copyright <span style={{ color: '#fff' }}>blindete.ro</span>
          </Copyright>
        </BottomRow>
      </Container>
    </SFooter>
  )
}

const DetailWrapper = styled.div`
  display: flex;
  padding: 10px;
`
const DetailFacebookWrapper = styled.div`
  display: flex;
  padding: 10px;
  :hover {
    cursor: pointer;
    background: #964070;
  }
`

const Detail = styled.div`
  padding-left: 5px;
  color: white;
`

const MapWrapper = styled(Col)`
  height: 200px;
  background: lightgrey;
`

const ContactWrapper = styled(Col)`
  padding-left: 50px;
`

const Language = styled.img`
  height: 25px;
  :hover {
    cursor: pointer;
  }
`

const Copyright = styled(Col)`
  font-size: 12px;
  color: #3c1a2d;
  font-weight: bold;
`

const SFooter = styled.div`
  margin-top: auto;
  padding-top: 30px;
  padding-bottom: 50px;
  background: #723155;
  color: #f5e8ef;
`

const BottomRow = styled(Row)`
  padding-top: 10px;
`

export default connect(
  state => ({
    language: state.internationalization.language
  }),
  dispatch => ({
    languageActions: bindActionCreators(languageActions, dispatch)
  })
)(Footer)
