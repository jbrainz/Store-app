import Product from '../components/Product'
import products from '../product'
import './index.css'

const HomeScreen = () => {
  return (
    <div className="container">
      <h1 className="is-size-2 center">Latest Products</h1>
      <div className="column push-up is-mobile">
        <div className="columns is-multiline">
          {products.map((product) => (
            <div key={product._id} className="column is-one-third">
              <Product product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomeScreen
