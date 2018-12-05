import React from 'react'

import styles from './Widget.css'

function Widget(props) {
  return (
    <section className={styles.root}>
      <header className={styles.header}>
        <h1 className={styles.title}>{props.title}</h1>
      </header>
      <div className={styles.content}>{props.children}</div>
      {props.footer && <footer className={styles.footer}>{props.footer}</footer>}
    </section>
  )
}

export default Widget
