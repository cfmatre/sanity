import React from 'react'
import DevWelcomeWidget from './components/DevWelcomeWidget'

function Root() {
  return <DevWelcomeWidget />
}

export default {
  type: 'dev/welcome',
  component: Root
}
