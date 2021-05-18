import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import Message from '../components/Message'
import './index.home.css'
import Loader from '../components/Loader'
import { listOrder } from '../state/actions/order-action'

const OrderListScreen = ({ history }) => {
  const dispatch = useDispatch()

  const orderList = useSelector((state) => state.orderList)
  const { loading, error, orders } = orderList

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listOrder())
    } else {
      history.push('/login')
    }
  }, [dispatch, userInfo, history])

  // const detailsHandler = (id) => {
  //   if (window.confirm('Are you sure?')) {
  //     dispatch(deleteUser(id))
  //   }
  // }
  return (
    <div style={{ marginTop: '10rem' }}>
      <h1>Orders</h1>
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
                <th>USER</th>
                <th>DATE</th>
                <th>PRICE</th>
                <th>PAID AT</th>
                <th>DELIVERED</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.user && order.user.name}</td>
                  <td>{order.createdAt.substring(0, 10)}</td>
                  <td>${order.totalPrice}</td>
                  <td>
                    {order.isPaid ? (
                      order.paidAt.substring(0, 10)
                    ) : (
                      <i className="fas fa-times" style={{ color: 'red' }}></i>
                    )}
                  </td>
                  <td>
                    {order.isDelivered ? (
                      order.deliveredAt.substring(0, 10)
                    ) : (
                      <i className="fas fa-times" style={{ color: 'red' }}></i>
                    )}
                  </td>
                  <td className="is-flex">
                    <NavLink to={`/orders/${order._id}`} className=" is-flex">
                      <button className="brd button is-link is-outlined">
                        Details
                      </button>
                    </NavLink>
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

export default OrderListScreen
