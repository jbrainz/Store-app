import { Link } from 'react-router-dom'
import Rating from '../components/Rating'
import products from '../product'
import './index.css'

const ProductDetails = ({ match }) => {
  const product = products.find((p) => p._id === match.params.id)
  return (
    <>
      <div style={{ marginTop: '10px' }} className="container">
        <Link to="/">
          <span className="is-light">
            <i className="fas fa-arrow-circle-left size"></i>
          </span>
        </Link>
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
                        {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                      </strong>
                    </div>
                    <hr className="hr-rule" />
                  </div>
                  <div className="column">
                    <button
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
    </>
  )
}

export default ProductDetails
