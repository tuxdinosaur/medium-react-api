import React, { Component } from 'react'

import styles from './LoginForm/index.module.css'

class AppInput extends Component {
  onChange (event) {
    if (this.props.onChange) this.props.onChange(event)
  }

  render () {
    const {
      id,
      type,
      label,
      ariaDescribedBy,
      children,
      value,
      placeholder
    } = this.props

    return (
      <div className='form-group'>
        <label htmlFor={id}>
          {label}
        </label>
        <input
          id={id}
          type={type}
          aria-describedby={ariaDescribedBy}
          value={value}
          onChange={this.onChange.bind(this)}
          placeholder={placeholder}
          className={`form-control ${styles.styleInput}`}
        />
        {children}
      </div>
    )
  }
}

export default AppInput
