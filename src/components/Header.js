/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link, NavLink } from 'react-router-dom'
import './header.css'
import { useState } from 'react'
import useWindowDimensions from '../util/windowsHeightWidth'

const Header = () => {
  const [className, setClassName] = useState(false)
  const [menDropdown, setMenDropdown] = useState(false)
  const [womenDropdown, setWomenDropdown] = useState(false)

  const { width } = useWindowDimensions()

  const onClick = () => {
    setClassName(!className)
  }

  return (
    <header>
      <nav
        className="navbar is-fixed-top"
        role="navigation"
        aria-label="main navigation"
      >
        {' '}
        {width <= 540 ? (
          <div className="navbar-brand">
            <NavLink className="navbar-item" activeClassName="selected" to="/">
              <img src="/img/logo.png" width="112" height="178" alt="robert" />
            </NavLink>
            <a
              role="button"
              className={`navbar-burger burger ${className ? 'is-active' : ''}`}
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
              onClick={onClick}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
        ) : null}
        {/* <a
          role="button"
          className={`navbar-burger burger ${className ? 'is-active' : ''}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          onClick={onClick}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a> */}
        <div
          id="navbarBasicExample"
          className={`navbar-menu ${className ? 'is-active' : ''}`}
        >
          <div className={className ? '' : 'navbar-start'}>
            <Link to="/" className="navbar-item">
              New Arrivals
            </Link>
            <div className="navbar-item has-dropdown is-hoverable">
              <Link
                className="navbar-item"
                onClick={() => setMenDropdown(!menDropdown)}
                to="/"
              >
                Men
              </Link>
              {menDropdown && (
                <div className="navbar-dropdown">
                  <Link to="/" className="navbar-item">
                    Shirts
                  </Link>
                  <Link to="/" className="navbar-item">
                    Polo
                  </Link>
                  <Link to="/" className="navbar-item">
                    Pants
                  </Link>
                  <hr className="navbar-divider" />
                  <Link to="/" className="navbar-item">
                    Customized
                  </Link>
                </div>
              )}
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <a
                onClick={() => setWomenDropdown(!womenDropdown)}
                className="navbar-item"
              >
                Women
              </a>
              {womenDropdown && (
                <div className="navbar-dropdown">
                  <Link to="/" className="navbar-item">
                    Home Wears
                  </Link>
                  <Link to="/" className="navbar-item">
                    Casuals
                  </Link>
                  <Link to="/" className="navbar-item">
                    Shirts
                  </Link>
                  <hr className="navbar-divider" />
                  <Link to="/" className="navbar-item">
                    Gowns
                  </Link>
                </div>
              )}
            </div>
          </div>
          {width > 540 ? (
            <div className="navbar-brand">
              <NavLink
                className="navbar-item"
                activeClassName="selected"
                to="/"
              >
                <img
                  src="/img/logo.png"
                  width="112"
                  height="178"
                  alt="robert"
                />
              </NavLink>
            </div>
          ) : null}

          <div className="navbar-end">
            <div className="navbar-item">
              <div>
                <Link to="/login" className="button is-light">
                  <span className="icon">
                    <i className="fas fa-user-circle"></i>
                  </span>
                  <strong>Account</strong>
                </Link>
              </div>
              <div>
                <Link to="/cart" className="button is-light">
                  <span className="icon">
                    <i className="fas fa-cart-plus"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
