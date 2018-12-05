import Icon from 'react-icons/lib/md/dashboard'
import {route} from 'part:@sanity/base/router'
import RootContainer from './containers/Root'

export default {
  router: route('/'),
  title: 'Dashboard',
  name: 'dashboard',
  icon: Icon,
  component: RootContainer
}
