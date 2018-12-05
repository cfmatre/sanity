/* eslint-disable react/prop-types */

import React from 'react'
import DefaultButton from 'part:@sanity/components/buttons/default'
import FormField from 'part:@sanity/components/formfields/default'
import RadioButtonSelect from 'part:@sanity/components/selects/radio'
import DefaultTextField from 'part:@sanity/components/textfields/default'
import Widget from '../../../components/Widget'

import styles from './SendInvitationForm.css'

function SendInvitationForm(props) {
  function handleSubmit(evt) {
    evt.preventDefault()
    props.onSend()
  }

  function handleEmailChange(evt) {
    props.onEmailChange(evt.target.value, evt.target.validity.valid)
  }

  function handleRoleChange(role) {
    props.onRoleChange(props.roles.indexOf(role))
  }

  const isDisabled = props.email.length === 0 || !props.isValid || props.isSending

  return (
    <form className={styles.root} onSubmit={handleSubmit}>
      <Widget
        title="Invite friends"
        footer={
          <div className={styles.buttons}>
            <DefaultButton type="submit" color="primary" disabled={isDisabled}>
              Send invitation
            </DefaultButton>
            {props.isSending && <span>Processing...</span>}
            {props.isSent && <span>Invitation sent</span>}
          </div>
        }
      >
        {props.users.filter(user => !user.isCurrentUser).map(user => {
          return (
            <div key={user.id}>
              {user.displayName}
              {user.isCurrentUser}
            </div>
          )
        })}

        <DefaultTextField
          label="Email address"
          description="The invitation will be sent to this address."
          onChange={handleEmailChange}
          value={props.email}
          type="email"
          placeholder="Email address"
          disabled={props.isSending}
        />

        {props.roles.length > 0 && (
          <FormField label="Role">
            <RadioButtonSelect
              items={props.roles}
              onChange={handleRoleChange}
              value={props.roles[props.roleIdx]}
            />
            <div className={styles.roleDescription}>
              NOTE: Administrators may manage all aspects of a project
            </div>
          </FormField>
        )}
      </Widget>
    </form>
  )
}

export default SendInvitationForm
