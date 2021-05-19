import { useEffect, useState } from 'react'
import axios from 'axios'
import { PayPalButton } from 'react-paypal-button-v2'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import './index.home.css'
import Loader from '../components/Loader'
import Message from '../components/Message'
import {
  getOrderDetails,
  payOrder,
  deliverOrder,
} from '../state/actions/order-action'
import {
  ORDER_PAY_RESET,
  ORDER_DELIVER_RESET,
} from '../state/constants/order-constants'

/**
 *
 * @param {* } param0
 * @returns JSX
 */
const OrderScreen = ({ match, history }) => {
  const orderId = match.params.id
  const dispatch = useDispatch()
  const [sdkReady, setSdkReady] = useState(false)

  const orderDetails = useSelector((state) => state.orderDetails)
  const { order, error, loading } = orderDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const orderPay = useSelector((state) => state.orderPay)
  const { success: successPay, loading: loadingPay } = orderPay

  const orderDeliver = useSelector((state) => state.orderDeliver)
  const { success: successDeliver, loading: loadingDeliver } = orderDeliver

  if (!loading) {
    const addDecimals = (num) => {
      return (Math.round(num * 100) / 100).toFixed(2)
    }
    order.itemsPrice = addDecimals(
      order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0),
    )
  }

  useEffect(() => {
    if (!userInfo) {
      history.push('/login')
    }
    const addPayPalScript = async () => {
      const { data: clientId } = await axios.get('/api/config/paypal')
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`
      script.async = true
      script.onload = () => {
        setSdkReady(true)
      }
      document.body.appendChild(script)
    }
    if (!order || successPay || successDeliver) {
      dispatch({ type: ORDER_PAY_RESET })
      dispatch({ type: ORDER_DELIVER_RESET })
      dispatch(getOrderDetails(orderId))
    } else if (!order.isPaid) {
      if (!window.paypal) {
        addPayPalScript()
      } else {
        setSdkReady(true)
      }
    }
  }, [dispatch, orderId, successPay, order, successDeliver, history, userInfo])

  const deliverHandler = () => {
    dispatch(deliverOrder(order))
  }

  const successPaymentHandler = (paymentResult) => {
    console.log(paymentResult)
    dispatch(payOrder(orderId, paymentResult))
  }
  return loading ? (
    <Loader />
  ) : error ? (
    <Message error={error} />
  ) : (
    <>
      {' '}
      <div className="container" style={{ marginTop: '10rem' }}>
        <h1 className="is-size-5  has-text-centered">ORDER: {order._id}</h1>
        <div className="columns is-6 margin-tp">
          <div className="column">
            <ul className="ul-list">
              <li>
                <div className="column">
                  <div className="column">
                    <div>
                      <strong>SHIPPING</strong>
                      <br />
                      <p>{order.user.name}</p>
                      <a href={`mailto:${order.user.email}`}>
                        {order.user.email}
                      </a>
                      <br />
                      {order.shippingAddress.address},{' '}
                      {order.shippingAddress.city}{' '}
                      {order.shippingAddress.postalCode},{' '}
                      {order.shippingAddress.country}
                    </div>
                  </div>

                  {order.isDelivered ? (
                    <Message
                      variant="has-background-success"
                      error={`Delivered on ${order.deliveredAt}`}
                    />
                  ) : (
                    <Message
                      variant="has-text-light has-background-danger"
                      error="Not Delivered"
                    />
                  )}
                </div>
                <div className="column ">
                  <div className="column not-center is-three-quarters-mobile">
                    <p>
                      <strong>Payment Method</strong> <br />
                      {order.paymentMethod}
                    </p>
                  </div>
                  {order.isPaid ? (
                    <Message
                      variant="has-text-light has-background-success "
                      error={`Paid on ${order.paidAt}`}
                    />
                  ) : (
                    <Message
                      variant="has-text-danger has-background-danger"
                      error="Not Paid"
                    />
                  )}
                </div>
                <strong>Order Items</strong> <br />
                <div className="column is-two-thirds is-mobile">
                  {order.orderItems.length === 0 ? (
                    <Message
                      error="Order is empty"
                      variant="has-text-danger has-background-danger"
                    />
                  ) : (
                    <ul className="ul-list">
                      {order.orderItems.map((item, index) => (
                        <li key={index}>
                          <div className="columns is-6 is-mobile">
                            <div className="column">
                              <figure className="image">
                                <img
                                  className="is-rounded"
                                  alt={item.name}
                                  src={item.image}
                                />
                              </figure>
                            </div>
                            <div className="column">
                              <Link to={`/product/${item.product}`}>
                                {item.name}
                              </Link>
                            </div>
                            <div className="column">
                              {item.qty} x ${item.price} = $
                              {item.qty * item.price}
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            </ul>
          </div>
          <div className="column">
            <div className="card">
              <div className="column">
                <h2 className="is-size-3 has-text-centered">Order Summary</h2>
              </div>
              <hr className="hr-rule" />
              <div className="column">
                <div className="columns is-mobile">
                  <div className="column">Items</div>
                  <div className="column">${order.itemsPrice}</div>
                </div>
              </div>
              <hr className="hr-rule" />
              <div className="column">
                <div className="columns is-mobile">
                  <div className="column">Shipping</div>
                  <div className="column">${order.shippingPrice}</div>
                </div>
              </div>
              <hr className="hr-rule" />
              <div className="column">
                <div className="columns is-mobile">
                  <div className="column">Tax</div>
                  <div className="column">${order.taxPrice}</div>
                </div>
              </div>
              <hr className="hr-rule" />
              <div className="column">
                <div className="columns is-mobile">
                  <div className="column">Total</div>
                  <div className="column">${order.totalPrice}</div>
                </div>
              </div>
              <hr className="hr-rule" />
              <div className="column">
                <div className="columns is-mobile">
                  {error && <p>{error}</p>}
                </div>
              </div>
              <div className="column is-centered is-flex">
                {!order.isPaid && (
                  <div className="columns is-mobile">
                    {loadingPay && <Loader />}
                    {!sdkReady ? (
                      <Loader />
                    ) : (
                      <PayPalButton
                        amount={order.totalPrice}
                        onSuccess={successPaymentHandler}
                      />
                    )}
                  </div>
                )}
                {userInfo &&
                  userInfo.isAdmin &&
                  order.isPaid &&
                  !order.isDelivered && (
                    <div className="columns is-mobile">
                      <button
                        type="button"
                        onClick={deliverHandler}
                        className={
                          loadingDeliver
                            ? 'button is-loading is-link brd'
                            : 'brd button is-link is-outlined'
                        }
                      >
                        Mark As Delivered
                      </button>
                    </div>
                  )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OrderScreen
