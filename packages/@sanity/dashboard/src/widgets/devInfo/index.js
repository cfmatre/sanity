import config from 'config:sanity'
import React from 'react'
import Widget from '../../components/Widget'

import styles from './index.css'

const {dataset, projectId} = config.api

const info = {
  dataset,
  groqEndpoint: `https://${projectId}.api.sanity.io/v1/data/query/${dataset}`,
  graphqlEndpoint: `https://${projectId}.api.sanity.io/v1/graphql/${dataset}/default`,
  manageUrl: `https://manage.sanity.io/projects/${projectId}`,
  projectId
}

function Root() {
  return (
    <Widget title="Project information">
      <dl className={styles.projectInfo}>
        <dt>Project ID</dt>
        <dd>{info.projectId}</dd>

        <dt>Dataset name</dt>
        <dd>{info.dataset}</dd>

        <dt>GROQ endpoint</dt>
        <dd>{info.groqEndpoint}</dd>

        <dt>GraphQL endpoint</dt>
        <dd>{info.graphqlEndpoint}</dd>
      </dl>
    </Widget>
  )
}

export default {
  type: 'dev/info',
  component: Root
}
