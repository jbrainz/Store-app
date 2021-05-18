import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import Message from '../components/Message'
import { getUserDetails, updateUser } from '../state/actions/user-actions'
import { USER_UPDATE_RESET } from '../state/constants/user-constants'
import FormContainer from '../components/FormContainer'
import './index.home.css'
import Loader from '../components/Loader'

const UserEditScreen = ({ match, history }) => {
  const userId = match.params.id

  const [email, setEmail] = useState('')
  const [isAdmin, setIsAdmin] = useState(false)
  const [name, setName] = useState('')

  const dispatch = useDispatch()

  const userDetails = useSelector((state) => state.userDetails)
  const { loading, error, user } = userDetails

  const userUpdate = useSelector((state) => state.userUpdate)
  const { success, error: updateError, loading: updateLoading } = userUpdate

  useEffect(() => {
    if (success) {
      dispatch({ type: USER_UPDATE_RESET })
      history.push('/adim/userlist')
    } else {
      if (!user.name || user._id !== userId) {
        dispatch(getUserDetails(userId))
      } else {
        setName(user.name)
        setEmail(user.email)
        setIsAdmin(user.isAdmin)
      }
    }
  }, [user, dispatch, userId, history, success])

  const submitHandler = (e) => {
    e.preventDefault()

    dispatch(updateUser({ _id: userId, name, email, isAdmin }))
  }

  return (
    <>
      <Link to="/admin/userlist" className="button is-light">
        Go Back
      </Link>
      <FormContainer>
        <h1 className="is-size-3">Edit User</h1>
        {updateError && (
          <Message variant="has-background-danger" error={error} />
        )}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message error={error} variant="has-background-danger" />
        ) : (
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
            <div id="isAdmin" className="field">
              <div className="control">
                <label class="checkbox">
                  <input
                    type="checkbox"
                    checked={isAdmin}
                    onChange={(e) => setIsAdmin(e.target.checked)}
                  />
                  Set Admin
                </label>
              </div>
            </div>
            <div className="field">
              <div className="control">
                <button
                  type="submit"
                  disabled={updateLoading}
                  className={
                    updateLoading
                      ? 'button is-loading is-link is-fullwidth is-rounded'
                      : 'button is-link is-fullwidth is-rounded'
                  }
                >
                  Update
                </button>
              </div>
            </div>
          </form>
        )}
      </FormContainer>
    </>
  )
}

export default UserEditScreen
