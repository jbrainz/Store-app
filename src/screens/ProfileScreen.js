import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Message from '../components/Message'
import {
  getUserDetails,
  updateUserProfile,
} from '../state/actions/user-actions'
import './index.css'

const ProfileScreen = ({ location, history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfrimPassword] = useState('')
  const [message, setMessage] = useState(null)
  const [name, setName] = useState('')

  const dispatch = useDispatch()

  const userDetails = useSelector((state) => state.userDetails)

  const { loading, error, user } = userDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
  const { success } = userUpdateProfile

  useEffect(() => {
    if (!userInfo) {
      history.push('/login')
    } else {
      if (!user.name) {
        dispatch(getUserDetails('profile'))
      } else {
        setName(user.name)
        setEmail(user.email)
      }
    }
  }, [history, userInfo, user, dispatch])

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Password donot match')
    }
    dispatch(updateUserProfile({ id: user._id, name, email, password }))
  }

  return (
    <div className="container">
      <div style={{ marginTop: '10rem' }} className="columns">
        <div className="column is-4">
          <h2 className="is-size-3">Profile Settings</h2>
          {error && <Message variant="is-danger" error={error} />}
          {message && <Message variant="is-danger" error={message} />}
          {success && (
            <Message variant="is-success" error="Update Successfull" />
          )}
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
                  className={
                    loading
                      ? 'button is-loading is-link is-fullwidth is-rounded'
                      : 'button is-link is-fullwidth is-rounded'
                  }
                >
                  Update
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="column">
          <h2 className="is-size-3"> Order History </h2>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen
