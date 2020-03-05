import React, { Component } from 'react'

import AppInput from './AppInput'
import AppButton from './AppButton'

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
      <form onSubmit={this.onSubmit.bind(this)}>
        <h1>Inicia Sesión</h1>

        <AppInput
          id='email'
          label='Correo electrónico'
          type='text'
          ariaDescribedBy='user email'
          placeholder='email@correo.com'
          value={this.state.email}
          onChange={this.onChange.bind(this)}
        />

        <AppInput
          id='password'
          label='Contraseña'
          type='password'
          ariaDescribedBy='user password'
          placeholder='Contraseña'
          value={this.state.password}
          onChange={this.onChange.bind(this)}
        />

        <AppButton
          type='submit'
          text='Iniciar Sesión'
          className='btn-primary btn-block'
        />
      </form>
    )
  }
}

export default LoginForm
