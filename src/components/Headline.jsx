import React from 'react'
import styled from 'styled-components'
import i18n from 'utils/i18n'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as languageActions from 'state/ducks/languageDuck'

function Headline(languageActions) {
  const changeLanguage = async () => {
    try {
      console.log('asdfasf')
      i18n.locale = i18n.locale === 'ro' ? 'en' : 'ro'
      console.log('new Language:  ', i18n.locale)
      await languageActions.languageActions.setLanguage(i18n.locale)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Div onClick={changeLanguage}>
      <Title>{i18n.t('company')}</Title>
      <Subtitle>
        <div>{i18n.t('kennel')}</div>
        <div>{i18n.t('cattery')}</div>
      </Subtitle>
    </Div>
  )
}

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100px;
  font-family: 'Lobster', cursive;
  color: #723155;
  font-weight: bold;
  text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9,
    0 5px 0 #aaa, 0 6px 1px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.1),
    0 1px 3px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2),
    0 5px 10px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.2),
    0 20px 20px rgba(0, 0, 0, 0.15);
`

const Title = styled.div`
  font-size: 48px;
`

const Subtitle = styled.div`
  /* font-size: 12px; */
  width: 200px;
  letter-spacing: 0.4em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export default connect(
  state => ({
    language: state.internationalization.language
  }),
  dispatch => ({
    languageActions: bindActionCreators(languageActions, dispatch)
  })
)(Headline)
