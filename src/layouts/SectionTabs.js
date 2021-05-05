/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react'
import './tabs.css'
import Product from '../components/Product'

const SectionTabs = ({ products }) => {
  const [menTabs, setMenTabs] = useState(true)
  const [womenTabs, setWomenTabs] = useState(false)

  const onClickMen = () => {
    setMenTabs(!menTabs)
    setWomenTabs(false)
  }

  const onClickWomen = () => {
    setWomenTabs(!womenTabs)
    setMenTabs(false)
  }
  return (
    <>
      <div className="tabs is-centered some-space">
        <ul>
          <li className={menTabs ? 'is-active' : 'not-active'}>
            <a
              className="has-text-weight-bold gh is-size-3"
              onClick={onClickMen}
            >
              Men
            </a>
          </li>
          <li className={womenTabs ? 'is-active' : 'not-active'}>
            <a
              className="has-text-weight-bold gh is-size-3"
              onClick={onClickWomen}
            >
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
                  <Product product={men} />
                </div>
              ))}
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
                  <Product product={women} />
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  )
}

export default SectionTabs
