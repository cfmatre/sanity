import React from 'react'
import Widget from '../../../components/Widget'

import styles from './DevFirstStepsWidget.css'

function FirstStepsWidget() {
  return (
    <Widget
      title="First steps"
      footer={
        <div className={styles.loadMoreLink}>
          <a href="#">Browse more tutorials</a>
        </div>
      }
    >
      <a className={styles.tutorialEntry} href="#">
        <div className={styles.preview}>
          <div className={styles.mediaContainer} />
          <div className={styles.playIcon} />
        </div>
        <div className={styles.textContainer}>
          <h3>Add documents</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus elit a accumsan
            porttitor.
          </p>
        </div>
      </a>

      <a className={styles.tutorialEntry} href="#">
        <div className={styles.preview}>
          <div className={styles.mediaContainer} />
          <div className={styles.playIcon} />
        </div>
        <div className={styles.textContainer}>
          <h3>Add custom document types</h3>
          <p>
            Nulla pulvinar neque vel arcu posuere, ac scelerisque turpis lacinia. Aliquam mi nibh,
            congue eu suscipit a.
          </p>
        </div>
      </a>

      <a className={styles.tutorialEntry} href="#">
        <div className={styles.preview}>
          <div className={styles.mediaContainer} />
          <div className={styles.playIcon} />
        </div>
        <div className={styles.textContainer}>
          <h3>Querying the API</h3>
          <p>
            Nulla egestas est porta eleifend venenatis. Fusce mollis eu erat in cursus. Aliquam
            convallis.
          </p>
        </div>
      </a>

      <a className={styles.tutorialEntry} href="#">
        <div className={styles.preview}>
          <div className={styles.mediaContainer} />
          <div className={styles.playIcon} />
        </div>
        <div className={styles.textContainer}>
          <h3>Setting up a Blog using Sanity</h3>
          <p>
            Nulla egestas est porta eleifend venenatis. Fusce mollis eu erat in cursus. Aliquam
            convallis.
          </p>
        </div>
      </a>

      <a className={styles.tutorialEntry} href="#">
        <div className={styles.preview}>
          <div className={styles.mediaContainer} />
          <div className={styles.playIcon} />
        </div>
        <div className={styles.textContainer}>
          <h3>Customizing the dashboard</h3>
          <p>
            Nulla egestas est porta eleifend venenatis. Fusce mollis eu erat in cursus. Aliquam
            convallis.
          </p>
        </div>
      </a>
    </Widget>
  )
}

export default FirstStepsWidget
