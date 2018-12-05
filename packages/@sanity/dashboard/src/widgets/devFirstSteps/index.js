// @implements :@sanity/dashboard/widget

import React from 'react'
import DevFirstStepsWidget from './components/DevFirstStepsWidget'

function Root() {
  return <DevFirstStepsWidget />
}

export default {
  type: 'dev/first-steps',
  component: Root
}
