import React from 'react'
import i18n from 'utils/i18n'
import { connect } from 'react-redux'
import BMap from 'components/BMap'
import { Phone, Mail, MapPin, Facebook } from 'react-feather'
import styled from 'styled-components'

// Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { underline } from 'ansi-colors'

function Footer() {
  return (
    <SFooter>
      <Container>
        <Row>
          <MapWrapper sm={4}>
            <BMap />
          </MapWrapper>
          <ContactWrapper sm={8} className="d-flex align-items-center">
            <Container>
              <Row>
                <Col sm={6}>
                  <DetailWrapper>
                    <Phone color="#f5e8ef" />
                    <Detail>+40 722 352 909</Detail>
                  </DetailWrapper>
                  <DetailWrapper>
                    <Mail color="#f5e8ef" />
                    <Detail>deblindete@gmail.com</Detail>
                  </DetailWrapper>
                  <DetailWrapper>
                    <MapPin color="#f5e8ef" size="31" />
                    <Detail>Str. Bagdasar Nr. 36 310231, Arad, România</Detail>
                  </DetailWrapper>
                </Col>
                <Col sm={6}>
                  <DetailFacebookWrapper>
                    <Facebook color="#f5e8ef" />
                    <Detail>Pomeranian</Detail>
                  </DetailFacebookWrapper>
                  <DetailFacebookWrapper>
                    <Facebook color="#f5e8ef" />
                    <Detail>Pisică Persană Chinchilla</Detail>
                  </DetailFacebookWrapper>
                </Col>
              </Row>
            </Container>
          </ContactWrapper>
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
    text-decoration: underline;
  }
`

const Detail = styled.div`
  padding-left: 5px;
`

const MapWrapper = styled(Col)`
  height: 300px;
`

const ContactWrapper = styled(Col)`
  padding-left: 60px;
`

const SFooter = styled.div`
  margin-top: auto;
  padding-top: 50px;
  padding-bottom: 100px;
  background: #723155;
  color: #f5e8ef;
`

export default connect(
  state => ({
    language: state.internationalization.language
  }),
  null
)(Footer)
