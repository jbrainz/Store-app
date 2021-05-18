import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import Message from '../components/Message'
import './index.home.css'
import Loader from '../components/Loader'
import { listUsers, deleteUser } from '../state/actions/user-actions'

const AdminScreens = ({ history }) => {
  const dispatch = useDispatch()

  const userList = useSelector((state) => state.userList)
  const { loading, error, users } = userList

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const userDelete = useSelector((state) => state.userDelete)
  const { success } = userDelete

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listUsers())
    } else {
      history.push('/login')
    }
  }, [dispatch, userInfo, history, success])

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure?')) {
      dispatch(deleteUser(id))
    }
  }
  return (
    <div style={{ marginTop: '10rem' }}>
      <h1>Users</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message error={error} variant="has-background-danger" />
      ) : (
        <div class="table-container">
          <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>ADMIN</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user._id}</td>
                  <td>{user.name}</td>
                  <td>
                    <a href={`mailto:${user.email}`}>{user.email}</a>
                  </td>
                  <td>
                    {user.isAdmin ? (
                      <i
                        className="fas fa-check"
                        style={{ color: 'green' }}
                      ></i>
                    ) : (
                      <i className="fas fa-times" style={{ color: 'red' }}></i>
                    )}
                  </td>
                  <td className="is-flex">
                    <NavLink
                      to={`/admin/user/${user._id}/edit`}
                      className=" is-flex"
                    >
                      <button className="brd button is-link is-outlined">
                        <i className="fas fa-edit"></i>
                      </button>
                    </NavLink>
                    <button
                      className="brd button is-danger is-outlined"
                      onClick={() => deleteHandler(user._id)}
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default AdminScreens
