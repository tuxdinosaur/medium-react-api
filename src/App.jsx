import React, { Component } from 'react'

import {
  BrowserRouter,
  Switch,
  Route,
  withRouter
} from 'react-router-dom'

import Navbar from './components/Navbar'

import Home from './views/Home'
import Post from './views/Post'
import Login from './views/Login'

import LoginForm from './components/LoginForm'

import api from './lib/api'

import ValidateSession from './components/ValidateSession'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      authorization: ''
    }
  }

  async onLogin (auth) {
    const payload = await api.login(auth.email, auth.password)

    this.setState({ authorization: payload.data.token })
  }

  async componentDidMount () {
    const token = window.sessionStorage.getItem('authorization')
    const payload = await api.validateSession(token)
    this.setState({ authorization: payload.data.token })
  }

  render () {
    /*
    if (!this.state.authorization) {
      return (
        <div className='app login' id='loginScreen'>
          <LoginForm onSubmit={this.onLogin.bind(this)} />
        </div>
      )
    }
    */

    return (
      <BrowserRouter>
        <div className='app'>
          <Navbar />
          <ValidateSession />
          <div className='container' id='content'>
            <Switch>
              <Route
                path='/'
                component={Home}
                exact
              />
              <Route
                path='/post'
                component={Post}
                exact
              />
              <Route
                path='/login'
                component={Login}
                exact
              />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
