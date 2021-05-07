import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckSteps from '../components/CheckSteps'

import { savePaymentMethod } from '../state/actions/cart-actions'

const PaymentScreen = ({ history }) => {
  const userRegister = useSelector((state) => state.userRegister)
  const { loading } = userRegister

  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart

  if (!shippingAddress) {
    history.push('/shipping')
  }

  const [paymentMethod, setPaymentMethod] = useState('PayPal')

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(savePaymentMethod(paymentMethod))
    history.push('/payment')
  }

  return (
    <FormContainer>
      <CheckSteps step1 step2 step3 />
      <h1 className="is-size-3">Payment Method</h1>
      <form onSubmit={submitHandler}>
        <div id="payment" className="field">
          <div className="control remove-padding">
            <label class="checkbox">
              <input
                type="radio"
                id="PayPal"
                name="paymentMethod"
                value="PayPal"
                checked
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              PayPal or Credit Card
            </label>
            <div className="control">
              <label class="checkbox">
                <input
                  type="radio"
                  id="Stripe"
                  name="paymentMethod"
                  value="Stripe"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                Stripe
              </label>
            </div>
          </div>
        </div>
        <div style={{ marginTop: '20px' }} className="field">
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

export default PaymentScreen
