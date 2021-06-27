/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import "./product.css";

const Product = ({ product, history, match }) => {
  const addToCart = () => {
    history.push(`/cart/${product._id}?qty=${1}`);
  };
  return (
    <div style={{ overflow: "hidden" }} className="card n-card back">
      <div className="card-image changestate back">
        <Link to={`/product/${product._id}`}>
          <figure className="image is-square is-fullwidth">
            <img src={product.image} alt={product.title} />
          </figure>
        </Link>
      </div>
      <div className="media-content main-holder">
        <button onClick={addToCart} className="button btn">
          Add To Cart
        </button>
        <Link to={`/product/${product._id}`}>
          <div className="show-content">
            <p className="text-custom subtitle">{product.name}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Product;
