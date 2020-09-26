import React, { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import colors from '../utils/colors'
const ANIMATION_DURATION = 300

export default ({ title, children }) => {
  const [showLoading, setShowLoading] = useState(true)
  const [splashOpacity, setSplashOpacity] = useState(1)
  const [textOpacity, setTestOpacity] = useState(1)

  const wait = time => new Promise(resolve => setTimeout(() => resolve(), time))
  const animate = useCallback(async () => {
    await wait(ANIMATION_DURATION * 2)
    setTestOpacity(0)
    await wait(ANIMATION_DURATION)
    setSplashOpacity(0)
    await wait(ANIMATION_DURATION)
    setShowLoading(false)
  }, [])

  useEffect(() => {
    animate()
  }, [animate])

  return (
    <>
      {showLoading && (
        <Splash opacity={splashOpacity}>
          <CenteredText opacity={textOpacity}>{title}.</CenteredText>
        </Splash>
      )}

      {children}
    </>
  )
}

const Splash = styled.div`
  z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
  position: fixed; /* Sit on top of the page content */
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  opacity: ${({ opacity }) => opacity};
  transition: opacity ${ANIMATION_DURATION}ms ease-in-out;
  background-color: ${colors.background};
`

const CenteredText = styled.h1`
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 400;
  transition: opacity ${ANIMATION_DURATION}ms ease-in-out;
  opacity: ${({ opacity }) => opacity};
`
