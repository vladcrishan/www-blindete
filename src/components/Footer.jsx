import React from 'react'
import i18n from 'utils/i18n'
import { connect } from 'react-redux'
import Map from 'components/Map'
import styled from 'styled-components'

// Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Footer() {
  return (
    <Div>
      <Container>
        <Row>
          <Col
            sm={4}
            style={{
              background: 'blue',
              paddingLeft: '30px',
              paddingRight: '30px'
            }}
          >
            <Map />
          </Col>
          <Col sm={8} style={{ background: 'red' }}>
            <Contact>
              <Col sm={6}>
                <div>Telefon</div>
                <div>Email</div>
                <div>Adresă</div>
              </Col>
              <Col sm={6}>asdf</Col>
            </Contact>
          </Col>
        </Row>
      </Container>
    </Div>
  )
}

const Contact = styled(Row)`
  padding-top: 30px;
  padding-left: 50px;
  font-size: 16px;
`

const Div = styled.div`
  margin-top: auto;
  padding-top: 50px;
  padding-bottom: 100px;
  background: #723155;
`

export default connect(
  state => ({
    language: state.internationalization.language
  }),
  null
)(Footer)
