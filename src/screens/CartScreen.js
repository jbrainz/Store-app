import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import { addToCart, removeFromcart } from '../state/actions/cart-actions'
import './index.css'

const CartScreen = ({ match, location, history }) => {
  const productId = match.params.id
  const qty = location.search ? Number(location.search.split('=')[1]) : 1

  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)

  const { cartItems } = cart

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty))
    }
  }, [dispatch, productId, qty])

  const removeFromCartItem = (id) => {
    dispatch(removeFromcart(id))
  }

  const checkoutHandler = () => {
    history.push('/login?redirect=shipping')
  }

  return (
    <div className="container" style={{ marginTop: '10rem' }}>
      <h3 className="mobile-feat">SHOPPING CART</h3>
      <div className="columns">
        <div className="column is-8">
          {cartItems.length === 0 ? (
            <div>
              <Message variant="is-danger" error="Your cart is empty" />
              <Link
                className="button is-link is-light"
                style={{ marginLeft: '5rem' }}
                to="/"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="card">
              <ul className="ul-list">
                {cartItems.map((item) => (
                  <li key={item.product}>
                    <div className="columns extended-columns">
                      <div className="column is-2">
                        <figure className="image is-128x128">
                          <img
                            className="is-rounded"
                            alt={item.name}
                            src={item.image}
                          />
                        </figure>
                      </div>
                      <div className="column is-3">
                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                      </div>
                      <div className="column is-2">${item.price}</div>
                      <div className="column is-2">
                        <form
                          className="column"
                          defaultValue={item.qty}
                          onChange={(e) =>
                            dispatch(
                              addToCart(item.product, Number(e.target.value)),
                            )
                          }
                        >
                          <div className="control">
                            <div className="select">
                              <select defaultValue={item.qty}>
                                {[...Array(item.countInStock).keys()].map(
                                  (x) => (
                                    <option key={x + 1} value={x + 1}>
                                      {x + 1}
                                    </option>
                                  ),
                                )}
                              </select>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="cloumn is-2 icon">
                        <button
                          type="button"
                          className="button is-light is-danger"
                          onClick={() => removeFromCartItem(item.product)}
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="column is-4 some-padding">
          <div className="card some-padding">
            <ul className="ul-list">
              <li style={{ textAlign: 'center' }}>
                <h2 className="is-size-4">
                  Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}
                  ) items
                </h2>
                $
                {cartItems
                  .reduce((acc, item) => acc + item.qty * item.price, 0)
                  .toFixed(2)}
              </li>
              <li>
                <button
                  type="button"
                  className="button is-primary is-fullwidth not-rounded is-hovered"
                  disabled={cartItems.length === 0}
                  onClick={checkoutHandler}
                >
                  Proceed To Checkout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartScreen
