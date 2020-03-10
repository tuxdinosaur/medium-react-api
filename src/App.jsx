import React, { useState, useEffect } from 'react'

import {
  BrowserRouter,
  Switch,
  Route,
  withRouter
} from 'react-router-dom'

import Navbar from './components/Navbar'
import ValidateSession from './components/ValidateSession'

import Home from './views/Home'
import Post from './views/Post'
import Login from './views/Login'
import Logout from './views/Logout'
import PostDetails from './views/PostDetails'

import LoginForm from './components/LoginForm'

import api from './lib/api'

function App(){
  const [authorization, setAutorization] = useState('')

  useEffect(() => {
    async function validateSession () {
      const token = window.sessionStorage.getItem('authorization')
      const payload = await api.validateSession(token)
      setAutorization(payload.data.token)
    }

    validateSession()
  },[authorization])

    return (
      <BrowserRouter>
        <div className='app'>
          <Navbar />
          <ValidateSession />
          <div className='container-fluid container-login' id='content'>
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
              <Route
                path='/logout'
                component={Logout}
                exact
              />
              <Route
                path='/post-detail/:id'
                component={PostDetails}
                exact
              />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    )
}

export default App
