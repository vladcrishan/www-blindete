import React from 'react'
import styled from 'styled-components'
import i18n from 'utils/i18n'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as languageActions from 'state/ducks/languageDuck'

function Headline(languageActions) {
  const changeLanguage = async () => {
    try {
      i18n.locale = i18n.locale === 'ro' ? 'en' : 'ro'
      console.log('new Language:  ', i18n.locale)
      await languageActions.languageActions.setLanguage(i18n.locale)
    } catch (error) {
      console.log(error)
    }
  }

  return <Title onClick={changeLanguage}>{i18n.t('Headline')}</Title>
}

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  background: lightblue;
`

const mapState = state => ({
  language: state.internationalization.language
})

const mapDispatch = dispatch => ({
  languageActions: bindActionCreators(languageActions, dispatch)
})

export default connect(
  mapState,
  mapDispatch
)(Headline)
