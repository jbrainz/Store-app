import { Link, NavLink } from 'react-router-dom'
import './header.css'

const CheckSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <nav className="navbar remove-border is-justify-content-center is-flex is-flex-direction-row">
      <div className="navbar-item edited">
        {step1 ? (
          <NavLink to="/login">
            <Link to="/login" className="text-styles">
              Sign In
            </Link>
          </NavLink>
        ) : (
          <Link
            to="/"
            className="disabledCursor text-styles"
            onClick={(event) => event.preventDefault()}
          >
            Sign In
          </Link>
        )}
      </div>

      <div className="navbar-item edited">
        {step2 ? (
          <NavLink to="/shipping">
            <Link to="/shipping" className="text-styles">
              Shipping
            </Link>
          </NavLink>
        ) : (
          <Link
            to="/"
            className="disabledCursor text-styles"
            onClick={(event) => event.preventDefault()}
          >
            Shipping
          </Link>
        )}
      </div>

      <div className="navbar-item edited">
        {step3 ? (
          <NavLink to="/payment">
            <Link to="/payment" className="text-styles">
              Payment
            </Link>
          </NavLink>
        ) : (
          <Link
            to="/"
            className="disabledCursor text-styles"
            onClick={(event) => event.preventDefault()}
          >
            Payment
          </Link>
        )}
      </div>

      <div className="navbar-item edited">
        {step4 ? (
          <NavLink to="/placeorder">
            <Link to="/placeorder" className="text-styles">
              Place Order
            </Link>
          </NavLink>
        ) : (
          <Link
            to="/"
            className="disabledCursor text-styles"
            onClick={(event) => event.preventDefault()}
          >
            Place Order
          </Link>
        )}
      </div>
    </nav>
  )
}

export default CheckSteps
