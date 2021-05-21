import React, { useEffect } from 'react'
import { Link } from 'react-dom'
import Meta from '../components/Meta'
import HomeContent from '../layouts/HomeContent'
import Product from '../components/Product'
import { useDispatch, useSelector } from 'react-redux'
import SectionTabs from '../layouts/SectionTabs'
import Slider from '../components/Slider'
import './index.home.css'
import { listProducts } from '../state/actions/productAction'
import Loader from '../components/Loader'
import Pagination from '../components/Pagination'
import Message from '../components/Message'
import ProductCarousel from '../components/ProductCarousel'

const HomeScreen = ({ match, history }) => {
  const keyword = match.params.keyword
  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products, page, pages } = productList
  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber])

  return (
    <>
      <Meta />
      <div style={{ marginTop: '8rem' }} className="container">
        {!keyword ? (
          <ProductCarousel />
        ) : (
          <Link to="/">
            <button className="button is-dark">Back</button>
          </Link>
        )}
        <hr className="hr-rule extends" />
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="has-background-danger" error={error} />
        ) : (
          <>
            <div className="content">
              <h3 className="has-text-centered my-5">The Opening Act</h3>
              <h2 className="has-text-centered">
                Graham's Collection, where any design is possible
              </h2>
            </div>
            <div className="column push-up is-mobile back">
              <div className="columns is-multiline back">
                {products.map((product) => (
                  <div key={product._id} className="column is-one-quarter">
                    <Product
                      match={match}
                      history={history}
                      product={product}
                    />
                  </div>
                ))}
              </div>
            </div>
            <Pagination
              pages={pages}
              page={page}
              keyword={keyword ? keyword : ''}
            />
            <hr className="hr-rule extends" />
            <div className="cloumns  is-align-content-flex-end hero-background">
              <div className="is-mobile-new ">
                <h1 className="mobile-features">Shop Now and get discounts</h1>
                <h3
                  style={{
                    color: 'white',
                  }}
                  className="mobile-feat"
                >
                  The Ultimate Convenient, Luxurious Experience
                </h3>
                <p className="title-sub ">
                  Shop from home. We'll do the rest. Enjoy free delivery & free
                  returns. Zoom or FaceTime for a one-on-one virtual styling
                  consultation.
                </p>
              </div>
              <div className="column has-elevation">
                <button className="my-button">Shop Men</button>
              </div>
            </div>
            <hr className="hr-rule extends" />
            <Slider history={history} match={match} products={products} />
            <SectionTabs />
            <HomeContent />
          </>
        )}
      </div>
    </>
  )
}

export default HomeScreen
