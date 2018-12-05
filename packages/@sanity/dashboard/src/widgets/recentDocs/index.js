/* eslint-disable id-length */

import schema from 'part:@sanity/base/schema?'
import React from 'react'
import DataProvider from '../../providers/DataProvider'
import RecentDocsWidget from './components/RecentDocsWidget'

const BUILTIN_TYPES = [
  'any',
  'string',
  'text',
  'datetime',
  'date',
  'boolean',
  'url',
  'email',
  'number',
  'reference',
  'image',
  'file',
  'object',
  'document',
  'array'
]

function buildQuery(limit = 5) {
  const allDocTypes = schema
    .getTypeNames()
    .filter(t => !t.startsWith('sanity.'))
    .filter(t => BUILTIN_TYPES.indexOf(t) === -1)
    .map(t => schema.get(t))
    .filter(t => t.type && t.type.name === 'document')
    .map(t => t.name)

  const q = `* [_type in ["${allDocTypes.join(
    '","'
  )}"]] | order(_updatedAt desc) {_type, _id, _updatedAt} [0..${limit}]`

  return q
}

function Root(props) {
  return (
    <DataProvider query={buildQuery(props.options.limit)}>
      {result => <RecentDocsWidget {...result} />}
    </DataProvider>
  )
}

export default {
  type: 'recent-docs',
  component: Root
}
