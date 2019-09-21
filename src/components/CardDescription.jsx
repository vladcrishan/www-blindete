import React from 'react'
import styled from 'styled-components'

// Bootstrap
import Card from 'react-bootstrap/Card'

function CardDescription({ title, description }) {
  return (
    <Card className="rounded-0" style={{ color: '#723155' }}>
      <Card.Body>
        <OverlayTitle>{title}</OverlayTitle>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  )
}

const OverlayTitle = styled(Card.Title)`
  font-size: 24px;
`

export default CardDescription
