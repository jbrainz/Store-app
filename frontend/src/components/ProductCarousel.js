import Carousel from 'react-elastic-carousel'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Loader from './Loader'
import Message from './Message'
import { listTopProducts } from '../state/actions/productAction'
import './product.css'
import useWindowDimensions from '../util/windowsHeightWidth'

const ProductCarousel = () => {
  const dispatch = useDispatch()
  const { width } = useWindowDimensions()

  const productTopRated = useSelector((state) => state.productTopRated)
  const { loading, error, products } = productTopRated

  useEffect(() => {
    dispatch(listTopProducts())
  }, [dispatch])
  return loading ? (
    <Loader />
  ) : error ? (
    <Message error={error} variant="has-background-danger" />
  ) : (
    <div className="main-container">
      <Carousel
        enableAutoPlay={true}
        autoPlaySpeed={6000}
        showArrows={width <= 430 ? false : true}
        pagination={false}
        itemsToShow={width <= 430 ? 1 : 2}
        enableMouseSwipe={false}
        easing="cubic-bezier(.28,.91,.62,.08)"
        tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
        transitionMs={700}
      >
        {products.map((product) => (
          <div key={product._id}>
            <Link to={`/product/${product._id}`} className="">
              <figure className="">
                <img className="fluid" alt={product.name} src={product.image} />
                <div className="index">
                  <h1 className="is-size-5">
                    {product.name} (${product.price})
                  </h1>
                </div>
              </figure>
            </Link>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default ProductCarousel
