/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom'
import './product.css'

const Product = ({ product }) => {
  return (
    <div style={{ overflow: 'hidden' }} className="card n-card">
      <div className="card-image">
        <figure className="image is-square is-fullwidth">
          <Link to={`/product/${product._id}`}>
            <img src={product.image} alt={product.title} />
          </Link>
        </figure>
      </div>
      <Link to={`/product/${product._id}`}>
        <div className="media-content">
          <p className="text-custom subtitle">{product.name}</p>
        </div>
      </Link>
    </div>
  )
}

export default Product
