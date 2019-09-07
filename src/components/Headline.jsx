import React from 'react'
import styled from 'styled-components'
import i18n from 'utils/i18n'

// redux
import { connect } from 'react-redux'

// Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Headline() {
  return (
    <SHeadline>
      <Container>
        <Row>
          <Col>
            <Title>{i18n.t('company')}</Title>
            <Subtitle>
              <div>{i18n.t('kennel&cattery')}</div>
              <div></div>
            </Subtitle>
          </Col>
        </Row>
      </Container>
    </SHeadline>
  )
}

const SHeadline = styled.div`
  font-family: 'Lobster', cursive;

  padding: 30px 0px 20px 0px;
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
  letter-spacing: 0.1em;
  font-weight: bold;
  color: #964070;
`

export default connect(
  state => ({
    language: state.internationalization.language
  }),
  null
)(Headline)
