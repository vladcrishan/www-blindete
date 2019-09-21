import React from 'react'
import styled from 'styled-components'
import i18n from 'utils/i18n'

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

function Headline(languageActions) {
  const changeLanguage = async language => {
    try {
      i18n.locale = language
      await languageActions.languageActions.setLanguage(i18n.locale)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <SHeadline>
      <Container>
        <Row>
          <Col>
            <Title>{i18n.t('company')}</Title>
            <Subtitle>
              <div>{i18n.t('kennel&cattery')}</div>
            </Subtitle>
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
    </SHeadline>
  )
}

const SHeadline = styled.div`
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

export default connect(
  state => ({
    language: state.internationalization.language
  }),
  dispatch => ({
    languageActions: bindActionCreators(languageActions, dispatch)
  })
)(Headline)
