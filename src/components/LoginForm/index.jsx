import React, { Component } from 'react'

import AppInput from '../AppInput'
import AppButton from '../AppButton'

import styles from './index.module.css'

class LoginForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  onChange (event) {
    const { id, value } = event.target

    this.setState({ [id]: value })
  }

  onSubmit (event) {
    event.preventDefault()

    if (this.props.onSubmit) this.props.onSubmit(this.state)

    this.setState({
      email: '',
      password: ''
    })
  }

  render () {
    return (
      <form className={`${styles.formLogin}`} onSubmit={this.onSubmit.bind(this)}>
        <h1 className={`${styles.titleLogin}`}>Welcome back</h1>
        <p className={`${styles.emailText}`}>
        Enter the email address associated <br/> with your
        account
        </p>

        <AppInput
          id='email'
          label='Your email'
          type='text'
          ariaDescribedBy='user email'
          placeholder='email@correo.com'
          value={this.state.email}
          onChange={this.onChange.bind(this)}
          className={`${styles.styleInput}`}
        />

        <AppInput
          id='password'
          label='Your password'
          type='password'
          ariaDescribedBy='user password'
          placeholder='Contraseña'
          value={this.state.password}
          onChange={this.onChange.bind(this)}
        />

        <AppButton
          type='submit'
          text='Continue'
          className={`btn-block ${styles.buttonDark}`}
        />
      </form>
    )
  }
}

export default LoginForm
