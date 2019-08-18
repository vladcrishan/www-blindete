import React from 'react'
import styled from 'styled-components'
import i18n from 'utils/i18n'
import Container from 'react-bootstrap/Container'
import { connect } from 'react-redux'

function Content() {
  return <Div>{i18n.t('Content')}</Div>
}

const Div = styled(Container)`
  flex: 1;
  background: lightgreen;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default connect(
  state => ({
    language: state.internationalization.language
  }),
  null
)(Content)
