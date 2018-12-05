/* eslint-disable id-length */
/* eslint-disable import/prefer-default-export */

import getIt from 'get-it'
import getItBase from 'get-it/lib/middleware/base'
import getItJsonResponse from 'get-it/lib/middleware/jsonResponse'
import getItPromise from 'get-it/lib/middleware/promise'
import client from 'part:@sanity/base/client?'

const request = getIt([getItBase('https://api.sanity.io/v1'), getItJsonResponse(), getItPromise()])

const HIDDEN_USER_IDS = ['everyone']
const USER_GROUPS = ['_.groups.administrator', '_.groups.public', '_.groups.read', '_.groups.write']

export function fetchUsers() {
  return client.fetch('*[_type=="system.group"]').then(data => {
    const users = data
      .reduce((_users, group) => {
        return _users.concat(group.members.map(userId => ({id: userId, group: group._id})))
      }, [])
      .filter(user => HIDDEN_USER_IDS.indexOf(user.id) === -1)
      .filter(user => USER_GROUPS.indexOf(user.group) > -1)

    const userInfoUrl = `/users/${users.map(u => u.id).join(',')}`

    request({url: userInfoUrl})
  })
}
