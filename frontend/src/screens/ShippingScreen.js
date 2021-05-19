import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckSteps from '../components/CheckSteps'

import { saveShippingAddress } from '../state/actions/cart-actions'

const ShippingScreen = ({ history }) => {
  const userRegister = useSelector((state) => state.userRegister)
  const { loading } = userRegister

  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart

  const [address, setAddress] = useState(shippingAddress.address)
  const [city, setCity] = useState(shippingAddress.city)
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
  const [country, setCountry] = useState(shippingAddress.country)

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(saveShippingAddress({ address, city, postalCode, country }))
    history.push('/payment')
  }

  return (
    <FormContainer>
      <CheckSteps step1 step2 />
      <h1 className="is-size-3">Shipping</h1>
      <form onSubmit={submitHandler}>
        <div id="address" className="field">
          {/* <label className="label">Adress</label> */}
          <div className="control">
            <input
              className="input extends-input"
              type="text"
              placeholder="address"
              value={address}
              required
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </div>
        <div id="city" className="field">
          {/* <label className="label">City</label> */}
          <div className="control">
            <input
              className="input extends-input"
              type="text"
              placeholder="city"
              value={city}
              required
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
        </div>
        <div id="postal-code" className="field">
          {/* <label className="label">Postal-code</label> */}
          <div className="control">
            <input
              className="input extends-input"
              type="text"
              placeholder="postal-code"
              value={postalCode}
              required
              onChange={(e) => setPostalCode(e.target.value)}
            />
          </div>
        </div>
        <div id="country" className="field">
          {/* <label className="label">Country</label> */}
          <div className="control">
            <input
              className="input extends-input"
              type="text"
              placeholder="country"
              value={country}
              required
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <button
              type="submit"
              className={
                loading
                  ? 'button is-loading is-link is-fullwidth is-rounded'
                  : 'button is-link is-fullwidth is-rounded'
              }
            >
              Proceed
            </button>
          </div>
        </div>
      </form>
    </FormContainer>
  )
}

export default ShippingScreen
