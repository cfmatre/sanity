import formatDate from 'date-fns/distance_in_words_to_now'
import {IntentLink} from 'part:@sanity/base/router'
import schema from 'part:@sanity/base/schema?'
import Preview from 'part:@sanity/base/preview'
import React from 'react'
import Widget from '../../../components/Widget'

import styles from './RecentDocsWidget.css'

function RecentDocsWidget({data, error}) {
  return (
    <Widget title="Recent documents">
      {error && <div>{error.message}</div>}
      {data && (
        <div>
          {data.map(doc => (
            <IntentLink
              className={styles.previewLink}
              key={doc._id}
              intent="edit"
              params={{id: doc._id, type: doc._type}}
            >
              <Preview
                value={doc}
                type={schema.get(doc._type)}
                layout="default"
                status={`${formatDate(doc._updatedAt)} ago`}
              />
              {/* <div>{doc._updatedAt}</div> */}
            </IntentLink>
          ))}
        </div>
      )}
    </Widget>
  )
}

export default RecentDocsWidget
