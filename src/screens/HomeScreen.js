import Product from '../components/Product'
import Slider from '../components/Slider'
import products from '../product'
import './index.css'

const HomeScreen = () => {
  return (
    <>
      <div className="container">
        <div className="main-container">
          <div className="flexx">
            <h1 className="mobile-font">
              Get 30% Discount On your first checkout!
            </h1>
            <p className="mobile">Get a bonus when you create and account</p>
            <button className="button shadow is-primary radius has-text-weight-semibold">
              Shop Now
            </button>
          </div>
        </div>
        <hr className="hr-rule extends" />
        <div className="column push-up is-mobile">
          <div className="columns is-multiline">
            {products.map((product) => (
              <div key={product._id} className="column is-one-quarter">
                <Product product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr className="hr-rule extends" />
      <div className="colum  features">
        <div className="columns is-flex">
          <div className="column is-one-quarter">
            <div className="cloumns  is-align-content-flex-end">
              <div className="column is-full-width">
                <h1 className="mobile-features">Shop Now and get discounts</h1>
              </div>
              <div className="column">
                <button className="button is-primary">New Arivals</button>
              </div>
            </div>
          </div>
          <div className="column is-one-third ">
            <figure className="image">
              <img src="/img/features.jpg" alt="select" />
            </figure>
          </div>
        </div>
      </div>
      <hr className="hr-rule extends" />
      <Slider />
    </>
  )
}

export default HomeScreen
