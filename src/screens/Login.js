import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import Message from '../components/Message'
import { login } from '../state/actions/user-actions'
import FormContainer from '../components/FormContainer'
import './index.css'

const LoginScreen = ({ location, history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)

  const { loading, error, userInfo } = userLogin

  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }

  return (
    <FormContainer>
      <h1 className="is-size-3">Sign In</h1>
      {error && <Message error={error} />}
      <form className="form-container  mt-6" onSubmit={submitHandler}>
        <div id="email" className="field">
          <div className="control">
            <input
              className="input extends-input"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div id="password" className="field">
          <div className="control">
            <input
              className="input  extends-input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <button
              className={
                loading
                  ? 'button is-loading is-link is-fullwidth is-rounded'
                  : 'button is-link is-fullwidth is-rounded'
              }
            >
              Login
            </button>
          </div>
        </div>
      </form>
      <div
        style={{ marginTop: '20px', marginLeft: 0, width: '80%' }}
        className="is-flex is-centered is-flex-direction-row"
      >
        <p style={{ marginRight: '2px' }}>Don't have an Account?</p>
        <Link to="/register" className="is-link is-light underline">
          Create One
        </Link>
      </div>
    </FormContainer>
  )
}

export default LoginScreen
