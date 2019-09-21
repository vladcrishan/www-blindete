import React from 'react'
import i18n from 'utils/i18n'
import { Phone, Mail, MapPin, Facebook } from 'react-feather'
import map from '../images/background/map.png'
import styled from 'styled-components'

// redux
import { connect } from 'react-redux'

// bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Footer() {
  return (
    <SFooter>
      <Container>
        <Row>
          <MapWrapper sm={4}>
            <MapImage
              onClick={() =>
                window.open('https://goo.gl/maps/WQFSCyk911kNsvCTA', '_blank')
              }
            />
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
        <Row style={{ paddingTop: '10px' }}>
          <Copyright className="d-flex justify-content-end align-items-end">
            © 2020 Copyright
            <span style={{ color: '#fff', marginLeft: '5px' }}>
              blindete.ro
            </span>
          </Copyright>
        </Row>
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
  padding: 0px;
`

const MapImage = styled.div`
  height: 100%;
  background-image: url(${map});
  :hover {
    cursor: pointer;
  }
`

const ContactWrapper = styled(Col)`
  padding-left: 50px;
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

export default connect(
  state => ({
    language: state.internationalization.language
  }),
  null
)(Footer)
