import React, {PropTypes} from 'react'
import FormBuilderPropTypes from '../FormBuilderPropTypes'
import {eq} from 'lodash'
import styles from './styles/String.css'
import ClearButton from '../buttons/ClearButton'

export default React.createClass({
  propTypes: {
    field: FormBuilderPropTypes.field.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func
  },

  getDefaultProps() {
    return {
      value: '',
      onChange() {}
    }
  },

  shouldComponentUpdate(nextProps) {
    return !eq(this.props, nextProps)
  },

  handleChange(e) {
    this.props.onChange({patch: {$set: e.target.value}})
  },

  render() {
    const {value, field} = this.props
    return (
      <div className={styles.root}>
        <ClearButton className={styles.clearButton} />
        <input
          className={styles.input}
          type="text"
          placeholder={field.placeholder}
          onChange={this.handleChange}
          value={value}
        />
      </div>
    )
  }
})
