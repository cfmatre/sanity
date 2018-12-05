import React from 'react'

function Root() {
  return <div style={{background: '#fff', padding: '1em', borderRadius: '4px'}}>Custom widget</div>
}

export default {
  type: 'custom',
  component: Root
}
