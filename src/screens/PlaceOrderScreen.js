import { useEffect } from 'react'
import './index.home.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import CheckSteps from '../components/CheckSteps'
import Message from '../components/Message'
import { createOrder } from '../state/actions/order-action'

const PlaceOrderScreen = ({ history }) => {
  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)

  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2)
  }
  cart.itemsPrice = addDecimals(
    cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0),
  )

  cart.shippingPrice = addDecimals(cart.itemsPrice > 100 ? 0 : 100)
  cart.taxPrice = addDecimals(Number((0.1 * cart.itemsPrice).toFixed(2)))
  cart.totalPrice = (
    Number(cart.itemsPrice) +
    Number(cart.shippingPrice) +
    Number(cart.taxPrice)
  ).toFixed(2)
  const orderCreate = useSelector((state) => state.orderCreate)
  const { order, success, error, loading } = orderCreate

  useEffect(() => {
    if (success) {
      history.push(`/orders/${order.createdOrder._id}`)
    }
    //eslint-disable-next-line
  }, [history, success])

  const placeOrderHandler = () => {
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,
      }),
    )
  }

  return (
    <div className="container" style={{ marginTop: '10rem' }}>
      <CheckSteps step1 step2 step3 step4 />
      <h2 className="is-size-5  has-text-centered">Summary</h2>
      <div className="columns is-6 margin-tp">
        <div className="column">
          <ul className="ul-list">
            <li>
              <div className="columns">
                <div className="column is-5">
                  <p>
                    <strong>Address</strong>
                    <br />
                    {cart.shippingAddress.address}, {cart.shippingAddress.city}{' '}
                    {cart.shippingAddress.postalCode},{' '}
                    {cart.shippingAddress.country}
                  </p>
                </div>
              </div>
              <div className="column is-5">
                <p>
                  <strong>Payment Method</strong> <br />
                  {cart.paymentMethod}
                </p>
              </div>
              <strong>Order Items</strong> <br />
              <div className="column is-two-thirds is-mobile">
                {cart.cartItems.length === 0 ? (
                  <Message
                    variant="has-background-danger"
                    error="Cart is empty"
                  />
                ) : (
                  <ul className="ul-list">
                    {cart.cartItems.map((item, index) => (
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
                <div className="column">${cart.itemsPrice}</div>
              </div>
            </div>
            <hr className="hr-rule" />
            <div className="column">
              <div className="columns is-mobile">
                <div className="column">Shipping</div>
                <div className="column">${cart.shippingPrice}</div>
              </div>
            </div>
            <hr className="hr-rule" />
            <div className="column">
              <div className="columns is-mobile">
                <div className="column">Tax</div>
                <div className="column">${cart.taxPrice}</div>
              </div>
            </div>
            <hr className="hr-rule" />
            <div className="column">
              <div className="columns is-mobile">
                <div className="column">Total</div>
                <div className="column">${cart.totalPrice}</div>
              </div>
            </div>
            <hr className="hr-rule" />
            <div className="column">
              <div className="columns is-mobile">{error && <p>{error}</p>}</div>
            </div>
            <div className="column is-centered is-flex">
              <button
                type="button"
                className={
                  loading
                    ? 'button is-loading is-link is-rounded'
                    : 'button is-link is-fullwidth is-rounded'
                }
                disabled={cart.cartItems.length === 0}
                onClick={placeOrderHandler}
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrderScreen
