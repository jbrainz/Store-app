import React, { useEffect } from 'react'
import HomeContent from '../layouts/HomeContent'
import Product from '../components/Product'
import { useDispatch, useSelector } from 'react-redux'
import SectionTabs from '../layouts/SectionTabs'
import Slider from '../components/Slider'
import './index.home.css'
import { listProducts } from '../state/actions/productAction'
import Loader from '../components/Loader'
import Message from '../components/Message'

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword

  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products } = productList
  useEffect(() => {
    dispatch(listProducts(keyword))
  }, [dispatch, keyword])

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
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="has-background-danger" error={error} />
        ) : (
          <>
            <div className="column push-up is-mobile">
              <div className="columns is-multiline">
                {products.map((product) => (
                  <div key={product._id} className="column is-one-quarter">
                    <Product product={product} />
                  </div>
                ))}
              </div>
            </div>
            <hr className="hr-rule extends" />
            <div className="colum  features">
              <div className="columns is-flex">
                <div className="column is-one-quarter">
                  <div className="cloumns  is-align-content-flex-end">
                    <div className="column is-full-width">
                      <h1 className="mobile-features">
                        Shop Now and get discounts
                      </h1>
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
            <Slider products={products} />
            <SectionTabs products={products} />
            <HomeContent />
          </>
        )}
      </div>
    </>
  )
}

export default HomeScreen
