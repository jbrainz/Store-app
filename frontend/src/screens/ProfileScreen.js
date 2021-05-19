import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import Message from '../components/Message'
import Loading from '../components/Loader'

import {
  getUserDetails,
  updateUserProfile,
} from '../state/actions/user-actions'
import { listMyOrder } from '../state/actions/order-action'
import './index.home.css'

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

  const myOrderList = useSelector((state) => state.myOrderList)
  const { orders, loading: myOrderLoading, error: myOrderError } = myOrderList

  useEffect(() => {
    if (!userInfo) {
      history.push('/login')
    } else {
      if (!user.name) {
        dispatch(getUserDetails('profile'))
        dispatch(listMyOrder())
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
          {error && <Message variant="has-background-danger" error={error} />}
          {message && (
            <Message variant="has-background-danger" error={message} />
          )}
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
          {myOrderLoading ? (
            <Loading />
          ) : myOrderError ? (
            <Message variant="has-background-danger" error={myOrderError} />
          ) : (
            <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>DATE</th>
                  <th>TOTAL</th>
                  <th>PAID</th>
                  <th>DELIVERD</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order._id}>
                    <td>{order._id}</td>
                    <td>{order.createdAt.substring(0, 10)}</td>
                    <td>${order.totalPrice}</td>
                    <td>
                      {order.isPaid ? (
                        order.paidAt.substring(0, 10)
                      ) : (
                        <i
                          className="fas fa-times"
                          style={{ color: 'red' }}
                        ></i>
                      )}
                    </td>
                    <td>
                      {order.isDelivered ? (
                        order.deliveredAt.substring(0, 10)
                      ) : (
                        <i
                          className="fas fa-times"
                          style={{ color: 'red' }}
                        ></i>
                      )}
                    </td>
                    <td>
                      <NavLink
                        to={`/order/${order._id}`}
                        className="is-fullwidth is-flex"
                      >
                        <button className="brd button is-link is-outlined">
                          Details
                        </button>
                      </NavLink>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen
