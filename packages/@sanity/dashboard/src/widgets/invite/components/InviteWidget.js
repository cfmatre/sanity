/* eslint-disable react/prop-types */

import React from 'react'
import SendInvitationForm from './SendInvitationForm'

function InviteWidget(props) {
  return (
    <SendInvitationForm
      roles={props.roles}
      roleIdx={props.roleIdx}
      email={props.email}
      onEmailChange={props.onEmailChange}
      onRoleChange={props.onRoleChange}
      onSend={props.onSend}
      isSending={props.isSending}
      isSent={props.isSent}
      isValid={props.isValid}
    />
  )
}

export default InviteWidget
