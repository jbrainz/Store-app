import { useEffect, useState } from 'react'
import Rating from '../components/Rating'
import './index.css'
import { useDispatch, useSelector } from 'react-redux'
import { listProductDetails } from '../state/actions/productAction'
import Message from '../components/Message'
import Loader from '../components/Loader'

const ProductDetails = ({ history, match }) => {
  const [qty, setQty] = useState(1)
  const dispatch = useDispatch()

  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails

  useEffect(() => {
    dispatch(listProductDetails(match.params.id))
  }, [dispatch, match])

  const addToCart = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`)
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message error={error} variant="has-background-danger" />
      ) : (
        <div style={{ marginTop: '10rem' }} className="container">
          <div className="columns  space-up">
            <div className="column ">
              <figure className="is-3by4 small-devices">
                <img src={product.image} alt={product.name} />
              </figure>
            </div>
            <div className="column content">
              <div>
                <h2 className="text">{product.name}</h2>
                <hr className="hr-rule" />
                <Rating
                  value={product.rating}
                  text={` ${product.numReviews} reviews`}
                />
                <hr className="hr-rule" />
                <h4 style={{ marginLeft: '15px' }} className="is-size-4">
                  Price: ${product.price}
                </h4>
                <hr className="hr-rule" />
                <h5 className="description">{product.description}</h5>
                <div className="column ">
                  <div className="card list-group">
                    <div className="columns is-mobile">
                      <div className="column">
                        <p className="is-family-monospace has-text-weight-semibold">
                          Price:
                        </p>
                      </div>
                      <div className="column">
                        <strong>${product.price}</strong>
                      </div>
                    </div>
                    <hr className="hr-rule" />
                    <div className="columns is-mobile">
                      <div className="column">
                        <p className="is-family-monospace has-text-weight-semibold">
                          Status:
                        </p>
                      </div>
                      <div className="column">
                        <strong>
                          {product.countInStock > 0
                            ? 'In Stock'
                            : 'Out Of Stock'}
                        </strong>
                      </div>
                      <hr className="hr-rule" />
                    </div>
                    {product.countInStock > 0 && (
                      <div className="columns">
                        <div className="column">Qty</div>

                        <form
                          className="column"
                          defaultValue={qty}
                          onChange={(e) => setQty(e.target.value)}
                        >
                          <div className="control">
                            <div className="select">
                              <select>
                                {[...Array(product.countInStock).keys()].map(
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
                    )}
                    <div className="column">
                      <button
                        onClick={addToCart}
                        className="button is-dark radius"
                        type="button"
                        disabled={product.countInStock === 0}
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ProductDetails
