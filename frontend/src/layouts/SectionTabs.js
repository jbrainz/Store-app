/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './tabs.css'
import { listAllProducts } from '../state/actions/productAction'
import Product from '../components/Product'
import Loader from '../components/Loader'
import Message from '../components/Message'

const SectionTabs = ({ history, match }) => {
  const [menTabs, setMenTabs] = useState(true)
  const [womenTabs, setWomenTabs] = useState(false)
  const dispatch = useDispatch()

  const productListAll = useSelector((state) => state.productListAll)
  const { products, loading, error } = productListAll

  const onClickMen = () => {
    setMenTabs(!menTabs)
    setWomenTabs(false)
  }

  const onClickWomen = () => {
    setWomenTabs(!womenTabs)
    setMenTabs(false)
  }
  useEffect(() => {
    dispatch(listAllProducts())
  }, [dispatch])

  return (
    <>
      {' '}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message error={error} />
      ) : (
        <>
          <div className="tabs is-centered some-space">
            <ul>
              <li className={menTabs ? 'is-active a-active' : 'not-active'}>
                <a className="gh is-size-5" onClick={onClickMen}>
                  Men
                </a>
              </li>
              <li className={womenTabs ? 'is-active a-active' : 'not-active'}>
                <a className="gh is-size-5" onClick={onClickWomen}>
                  Women
                </a>
              </li>
            </ul>
          </div>
          {menTabs && (
            <div className="column">
              <div className="columns">
                {products
                  .filter((product) => product.category === 'men')
                  .map((men) => (
                    <div key={men._id} className="column">
                      <Product history={history} match={match} product={men} />
                    </div>
                  ))}
                )
              </div>
            </div>
          )}
          {womenTabs && (
            <div className="column">
              <div className="columns">
                {products
                  .filter((product) => product.category === 'women')
                  .map((women) => (
                    <div key={women._id} className="column">
                      <Product
                        history={history}
                        match={match}
                        product={women}
                      />
                    </div>
                  ))}
              </div>
            </div>
          )}
        </>
      )}
    </>
  )
}

export default SectionTabs
