import React from 'react'
import styled from 'styled-components'
import i18n from 'utils/i18n'
import { connect } from 'react-redux'

function Content() {
  return <Body className="container">{i18n.t('Content')}</Body>
}

const Body = styled.div`
  display: flex;
  flex: 1;
  background: lightgreen;
  justify-content: center;
  align-items: center;
`

export default connect(
  state => ({
    language: state.internationalization.language
  }),
  null
)(Content)
