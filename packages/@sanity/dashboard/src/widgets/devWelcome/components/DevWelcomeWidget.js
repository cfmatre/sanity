import React from 'react'

import styles from './DevWelcomeWidget.css'

function DevWelcomeWidget() {
  return (
    <div className={styles.root}>
      <div className={styles.mediaContainer}>
        <div className={styles.youtubeVideo}>
          <iframe
            src="https://www.youtube.com/embed/2ceM_tSus_M?showinfo=0"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      <div className={styles.textContainer}>
        <h2>Welcome to Sanity!</h2>
        <p>
          <strong>Well done!</strong> You’ve just started Sanity Studio and connected to a data
          project in Sanity’s cloud.
        </p>
      </div>
    </div>
  )
}

export default DevWelcomeWidget
