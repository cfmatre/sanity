/* eslint-disable id-length */

import widgets from 'all:part:@sanity/dashboard/widget'
import React from 'react'
import Dashboard from '../components/Dashboard'
import config from '../config'

function resolveWidget(type) {
  const widget = widgets.find(w => w.type === type)

  if (!widget)
    return {
      // eslint-disable-next-line react/display-name
      component: () => (
        <div
          style={{
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px dashed #ccc',
            color: '#999'
          }}
        >
          Widget not found: {type}
        </div>
      )
    }

  return widget
}

function resolveSections(sections) {
  return sections
    .filter(
      section =>
        Array.isArray(section) || config.mode === 'development' || !section.type.startsWith('dev/')
    )
    .map((section, idx) => {
      if (Array.isArray(section)) {
        return {
          type: 'row',
          key: `${idx}`,
          sections: resolveSections(section || [])
        }
      }

      const widget = resolveWidget(section.type)

      return {
        type: 'widget',
        key: `${idx}`,
        widget,
        flex: section.flex || 1,
        options: section.options || {}
      }
    })
}

// eslint-disable-next-line react/no-multi-comp
function Root() {
  const sections = resolveSections(config.sections || [])

  return <Dashboard title={config.title} sections={sections} />
}

export default Root
