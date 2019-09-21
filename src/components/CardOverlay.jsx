import React from 'react'
import styled from 'styled-components'

// Bootstrap
import Card from 'react-bootstrap/Card'

function CardOverlay({ imageSrc, text, onClick }) {
  return (
    <Card className="rounded-0">
      <Card.Img src={imageSrc} alt="CardOverlay" className="rounded-0" />
      <Overlay
        className="d-flex justify-content-center align-items-center"
        onClick={onClick}
      >
        <OverlayTitle className="text-center">{text}</OverlayTitle>
      </Overlay>
    </Card>
  )
}

const Overlay = styled(Card.ImgOverlay)`
  color: #fff;
  background: #000;
  opacity: 0.3;
  cursor: pointer;
  :hover {
    background: #fff;
    color: #723155;
    opacity: 0.9;
    -webkit-transition: all 0.2s linear;
    -moz-transition: all 0.2s linear;
    -ms-transition: all 0.2s linear;
    -o-transition: all 0.2s linear;
    transition: all 0.2s linear;
  }
`

const OverlayTitle = styled(Card.Title)`
  font-size: 24px;
  font-weight: bold;
`

export default CardOverlay
