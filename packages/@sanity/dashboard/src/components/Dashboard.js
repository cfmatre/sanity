/* eslint-disable react/no-multi-comp */
/* eslint-disable react/prop-types */

import React from 'react'

import styles from './Dashboard.css'

function renderSection(section) {
  if (section.type === 'row') {
    return (
      <div className={styles.row} key={section.key}>
        {section.sections.map(renderSection)}
      </div>
    )
  }

  if (section.type === 'widget') {
    const Widget = section.widget.component

    return (
      <div className={styles.widgetWrapper} key={section.key} style={{flex: section.flex || 1}}>
        <Widget options={section.options} />
      </div>
    )
  }

  return <div>Unknown section type: {section.type}</div>
}

function Dashboard({title, sections}) {
  return (
    <div className={styles.root}>
      <h1 className={styles.headline}>{title}</h1>
      <div className={styles.sections}>{sections.map(renderSection)}</div>
    </div>
  )
}

export default Dashboard
