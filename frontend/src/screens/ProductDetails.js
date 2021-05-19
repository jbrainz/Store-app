import { useEffect, useState } from 'react'
import Meta from '../components/Meta'
import Rating from '../components/Rating'
import { Link } from 'react-router-dom'
import './index.home.css'
import { useDispatch, useSelector } from 'react-redux'
import {
  listProductDetails,
  reviewProduct,
} from '../state/actions/productAction'
import { PRODUCT_REVIEW_RESET } from '../state/constants/productConstants'
import Message from '../components/Message'
import Loader from '../components/Loader'

const ProductDetails = ({ history, match }) => {
  const [qty, setQty] = useState(1)
  const [rating, setRatin] = useState(0)
  const [comment, setComment] = useState('')

  const dispatch = useDispatch()

  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails

  const reviewReducer = useSelector((state) => state.reviewReducer)
  const {
    error: reviewError,
    success: reviewSuccess,
    loading: reviewLoading,
  } = reviewReducer
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    if (reviewSuccess) {
      alert('Review Submitted!')
      setRatin(0)
      setComment('')
      dispatch({ type: PRODUCT_REVIEW_RESET })
    }
    dispatch(listProductDetails(match.params.id))
  }, [dispatch, match, reviewSuccess])

  const addToCart = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      reviewProduct(match.params.id, {
        rating,
        comment,
      }),
    )
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message error={error} variant="has-background-danger" />
      ) : (
        <>
          <Meta title={product.name} description={product.description} />
          <div style={{ marginTop: '10rem' }} className="container">
            <div className="columns  space-up">
              <div className="column">
                <figure className="is-3by4 small-devices">
                  <img src={product.image} alt={product.name} />
                </figure>
              </div>
              <div className="column content">
                <div>
                  <h2 className="text">{product.name}</h2>
                  <hr className="hr-rule" />
                  <Rating
                    value={product.rating || 0}
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
          <div className="columns">
            <div className="column  is-3by4 is-6">
              <h2 className="is-size-5" style={{ textAlign: 'center' }}>
                REVIEW
              </h2>
              {product.reviews.lenght === 0 && (
                <Message error="No reviews" variant="has-background-light" />
              )}
              <div className="card">
                <ul className="ul-list">
                  {product.reviews.map((review) => (
                    <li key={review._id}>
                      <strong>{review.name}</strong>
                      <Rating value={review.rating || rating} text="" />
                      <p>{review.createdAt.substring(0, 10)}</p>
                      <p>{review.comment}</p>
                    </li>
                  ))}
                  <div className="column">
                    <h2 style={{ textAlign: 'center' }} className="is-size-5">
                      WRITE A CUSTOMER REVIEW
                    </h2>
                    {reviewError && (
                      <Message
                        error={reviewError}
                        variant="has-background-danger"
                      />
                    )}
                    {userInfo ? (
                      <form onSubmit={submitHandler} className="column">
                        <div className="control">
                          <div id="rating" className="field">
                            <label className="label">Rating</label>
                            <select
                              onChange={(e) => setRatin(e.target.value)}
                              defaultValue={rating}
                            >
                              <option value="">Select...</option>
                              <option value="1">1 - Poor</option>
                              <option value="2">2 - Fair</option>
                              <option value="3">3 - Good</option>
                              <option value="4">4 - Very Good</option>
                              <option value="5">5 - Execelent</option>
                            </select>
                          </div>
                        </div>
                        <div className="control">
                          <div id="comment" className="field">
                            <label className="label">Comment</label>
                            <textarea
                              rows={3}
                              className="textarea extends-input is-hovered"
                              type="text"
                              placeholder="description"
                              value={comment}
                              onChange={(e) => setComment(e.target.value)}
                              required
                            ></textarea>
                          </div>
                        </div>
                        <button
                          type="submit"
                          disabled={reviewLoading}
                          className={
                            reviewLoading
                              ? 'button disabled is-loading is-link is-fullwidth is-rounded'
                              : 'button is-link is-fullwidth is-rounded'
                          }
                        >
                          Add Review
                        </button>
                      </form>
                    ) : (
                      <Message
                        error="You have to be signed in"
                        variant="notification is-warning is-light"
                      >
                        <Link to="/login">
                          <p>Sign In</p>
                        </Link>
                      </Message>
                    )}
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default ProductDetails
