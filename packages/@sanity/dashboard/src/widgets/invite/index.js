import sanityConfig from 'config:sanity'
import React from 'react'
import SendInvitationForm from './components/SendInvitationForm'
import data from './data'
// import {fetchUsers} from './helpers'

class Root extends React.PureComponent {
  state = {
    email: '',
    isSending: false,
    isSent: false,
    isValid: true,
    roles: [
      {title: 'Administrator', name: 'admin'},
      {title: 'Read and write', name: 'rw'},
      {title: 'Read', name: 'r'}
    ],
    roleIdx: 0,
    users: [],
    isMembersLoading: false,
    isMembersLoaded: false
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({isMembersLoading: true})

      // fetchUsers()
      // Fake data fetch
      setTimeout(() =>
        this.setState({users: data.users, isMembersLoading: false, isMembersLoaded: true})
      )
    }, 0)
  }

  handleEmailChange = (email, isValid) => {
    this.setState({email, isValid})
  }

  handleRoleChange = roleIdx => {
    this.setState({roleIdx})
  }

  handleSend = () => {
    const role = this.state.roles[this.state.roleIdx]

    if (!role) {
      throw new Error('Could not resolve role')
    }

    const body = {
      email: this.state.email,
      role: role.name
    }

    // eslint-disable-next-line no-console
    console.log(
      `POST https://manage.sanity.io/invitations/project/${sanityConfig.api.projectId}`,
      body
    )

    this.setState({isSending: true})

    setTimeout(() => {
      this.setState({isSending: false, isSent: true, email: ''})
      setTimeout(() => this.setState({isSent: false}), 3000)
    }, 1000)
  }

  render() {
    // console.log(this.state)

    return (
      <SendInvitationForm
        {...this.state}
        onEmailChange={this.handleEmailChange}
        onRoleChange={this.handleRoleChange}
        onSend={this.handleSend}
        users={this.state.users}
      />
    )
  }
}

export default {
  type: 'invite',
  component: Root
}
