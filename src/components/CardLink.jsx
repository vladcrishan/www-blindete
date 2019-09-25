import React from 'react'
import styled from 'styled-components'

// Bootstrap
import Card from 'react-bootstrap/Card'

export default ({ imageSrc, text, onClick }) => {
  return (
    <Card className="rounded-0">
      <Card.Img src={imageSrc} alt="CardLink" className="rounded-0" />
      <Overlay
        onClick={onClick}
        className="d-flex justify-content-start align-items-start"
      >
        <OverlayTitle>{text}</OverlayTitle>
      </Overlay>
    </Card>
  )
}

const Overlay = styled(Card.ImgOverlay)`
  color: #723155;
  cursor: pointer;
  padding: 15px;
  opacity: 0.9;
`

const OverlayTitle = styled(Card.Title)`
  padding: 10px 20px 10px 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin: 0px;
  background: #fff;
`
