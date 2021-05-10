import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import Message from '../components/Message'
import { register } from '../state/actions/user-actions'
import FormContainer from '../components/FormContainer'
import './index.css'

const RegisterScreen = ({ location, history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfrimPassword] = useState('')
  const [message, setMessage] = useState(null)

  const [name, setName] = useState('')

  const dispatch = useDispatch()

  const userRegister = useSelector((state) => state.userRegister)

  const { loading, error, userInfo } = userRegister

  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Password donot match')
    }
    dispatch(register(name, email, password))
  }

  return (
    <FormContainer>
      <h1 className="is-size-3">Sign Up</h1>
      {error && <Message error={error} variant="has-background-danger" />}
      {message && <Message error={message} variant="has-background-danger" />}
      <form className="form-container  mt-6" onSubmit={submitHandler}>
        <div id="name" className="field">
          <div className="control">
            <input
              className="input extends-input"
              type="name"
              placeholder="Full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div id="email" className="field">
          <div className="control">
            <input
              className="input extends-input"
              type="email"
              placeholder="Email"
              aria-placeholder="example@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
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
        <div id="confirmPassword" className="field">
          <div className="control">
            <input
              className="input  extends-input"
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfrimPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <button
              type="submit"
              className={
                loading
                  ? 'button is-loading is-link is-fullwidth is-rounded'
                  : 'button is-link is-fullwidth is-rounded'
              }
            >
              Register
            </button>
          </div>
        </div>
      </form>
      <div
        style={{ marginTop: '20px', marginLeft: 0, width: '80%' }}
        className="is-flex is-centered is-flex-direction-row"
      >
        <p style={{ marginRight: '2px' }}>Already have an Account?</p>
        <Link
          to={redirect ? `/login?redirect=${redirect}` : '/login'}
          className="is-link is-light underline"
        >
          Sign In
        </Link>
      </div>
    </FormContainer>
  )
}

export default RegisterScreen
