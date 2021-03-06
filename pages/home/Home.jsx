import { keyframes } from '@emotion/core'
import styled from '@emotion/styled'
import { Flex } from '@rebass/grid/emotion'
import React from 'react'
import Typist from 'react-typist'
import { themeShape } from '../../lib/prop-types'
import Layout from '../_components/Layout'
import useResume from '../_components/useResume'
import MiniMe from './components/MiniMe'

const Container = styled(Flex)({
  height: '100%',
  textAlign: 'center',
  padding: '0.5em',
})

const ConstrainedMiniMe = styled(Flex)({
  marginTop: '24px',
  maxHeight: '302px',
  height: '30vh',
  display: 'block',
}).withComponent(MiniMe)

const blink = keyframes`
  from, to { opacity: 1 }
  50% { opacity:0; }
`

const TypeWriter = styled(Typist)(({ theme: { typography } }) => ({
  height: '5em',
  ...typography.display1,
  '.Cursor': {
    display: 'inline-block',
    fontSize: `calc(${typography.display1.fontSize} * 1.25)`,
    '&--blinking': {
      opacity: 0,
      animation: `${blink} 1s linear infinite`,
    },
  },
}))

TypeWriter.propTypes = {
  theme: themeShape,
}

const Home = () => {
  const { basics: { label } } = useResume()

  return (
    <Layout>
      <Container flexDirection="column" alignItems="center" justifyContent="center">
        <TypeWriter avgTypingDelay={30} stdTypingDelay={0}>
          Hi! I'm Stijn.
          <br />
          An { label }.
        </TypeWriter>
        <ConstrainedMiniMe />
      </Container>
    </Layout>
  )
}

export default Home
