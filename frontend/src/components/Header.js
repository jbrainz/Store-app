/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react'
import { Route } from 'react-router-dom'
import { Link, NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import './header.css'
import useWindowDimensions from '../util/windowsHeightWidth'
import SearchBox from './SearchBox'
import { logout } from '../state/actions/user-actions'

const Header = () => {
  const [className, setClassName] = useState(false)
  const [menDropdown, setMenDropdown] = useState(false)
  const [womenDropdown, setWomenDropdown] = useState(false)
  const [profile, setProfile] = useState(false)
  const [admin, setAdminDropdown] = useState(false)

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const dispatch = useDispatch()
  const { width } = useWindowDimensions()

  const onClick = () => {
    setClassName(!className)
    setMenDropdown(false)
    setWomenDropdown(false)
    setProfile(false)
    setAdminDropdown(false)
  }

  const logoutHandler = () => {
    dispatch(logout())
    setClassName(!className)
  }

  return (
    <header>
      <nav
        className="navbar new-navbar is-fixed-top"
        role="navigation"
        aria-label="main navigation"
      >
        {' '}
        {width <= 1024 ? (
          <div className="navbar-brand">
            <NavLink className="navbar-item" activeClassName="selected" to="/">
              <img src="/img/logo.png" width="179" height="78" alt="robert" />
            </NavLink>
            <div className="is-light center-column columns is-mobile">
              <div className="column ">
                <Link to="/cart" className="is-dark navbar-item">
                  <span className="cart-item">
                    <i className="fas fa-shopping-bag"></i>
                  </span>
                </Link>
              </div>

              <div className="column">
                <a
                  role="button"
                  className={`navbar-burger burger  ${
                    className ? 'is-active' : ''
                  }`}
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
            </div>
          </div>
        ) : null}
        <div
          id="navbarBasicExample"
          className={`navbar-menu navbar-is-mobile ${
            className ? 'is-active' : ''
          }  `}
        >
          <div className={className ? '' : 'navbar-start'}>
            <Link
              onClick={() => setClassName(!className)}
              to="/"
              className="navbar-item"
            >
              New Arrivals
            </Link>
            <div className=" navbar-item has-dropdown is-hoverable">
              <Link
                className="navbar-item"
                onClick={() => setMenDropdown(!menDropdown)}
                to="#"
              >
                Men
              </Link>
              {menDropdown && (
                <div className="navbar-dropdown">
                  <Link
                    onClick={() => setClassName(!className)}
                    to="/"
                    className="navbar-item"
                  >
                    T-Shirts
                  </Link>
                  <Link
                    onClick={() => setClassName(!className)}
                    to="/"
                    className="navbar-item"
                  >
                    Polo
                  </Link>
                  <Link
                    onClick={() => setClassName(!className)}
                    to="/"
                    className="navbar-item"
                  >
                    Pants
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
                  <Link
                    onClick={() => setClassName(!className)}
                    to="/"
                    className="navbar-item"
                  >
                    Home Wears
                  </Link>
                  <Link
                    onClick={() => setClassName(!className)}
                    to="/"
                    className="navbar-item"
                  >
                    Casuals
                  </Link>
                  <Link
                    onClick={() => setClassName(!className)}
                    to="/"
                    className="navbar-item"
                  >
                    Shirts
                  </Link>
                </div>
              )}
            </div>
          </div>
          {width > 1024 ? (
            <div className="navbar-brand">
              <NavLink
                className="navbar-item"
                activeClassName="selected"
                to="/"
              >
                <img
                  src="/img/logo.png"
                  width="290"
                  height="120"
                  alt="robert"
                />
              </NavLink>
            </div>
          ) : null}

          <div className="navbar-end">
            <div className="navbar-item">
              {userInfo ? (
                <div className="navbar-item has-dropdown is-hoverable">
                  <Link
                    to="#"
                    className="navbar-item"
                    onClick={() => setProfile(!profile)}
                  >
                    {userInfo.name}
                  </Link>
                  {profile && (
                    <div className="navbar-dropdown">
                      <Link
                        style={{ fontSize: '15px', fontWeight: '700' }}
                        to="/profile"
                        className="navbar-item"
                        onClick={() => setClassName(!className)}
                      >
                        Profile
                      </Link>
                      <a
                        style={{ fontSize: '15px', fontWeight: '700' }}
                        onClick={logoutHandler}
                        className="navbar-item"
                      >
                        Logout
                      </a>
                    </div>
                  )}
                </div>
              ) : (
                <div className="navbar-item">
                  <Link to="/login" className="is-light navbar-item">
                    <span className="cart-item">
                      <i className="far fa-user-circle"></i>
                    </span>
                  </Link>
                </div>
              )}
              {userInfo && userInfo.isAdmin && (
                <div className="navbar-item has-dropdown is-hoverable">
                  <Link
                    to="/"
                    className="navbar-item"
                    onClick={() => setAdminDropdown(!admin)}
                  >
                    Admin
                  </Link>
                  {admin && (
                    <div className="navbar-dropdown">
                      <Link
                        style={{ fontSize: '15px', fontWeight: '700' }}
                        to="/adim/userlist"
                        className="navbar-item"
                        onClick={() => setClassName(!className)}
                      >
                        Users
                      </Link>
                      <Link
                        style={{ fontSize: '15px', fontWeight: '700' }}
                        to="/admin/productlist"
                        className="navbar-item"
                        onClick={() => setClassName(!className)}
                      >
                        Products
                      </Link>
                      <Link
                        style={{ fontSize: '15px', fontWeight: '700' }}
                        to="/admin/orderlist"
                        className="navbar-item"
                        onClick={() => setClassName(!className)}
                      >
                        Orders
                      </Link>
                    </div>
                  )}
                </div>
              )}
              {width >= 1024 && (
                <div style={{ marginLeft: '1.5rem' }} className="is-light">
                  <Link to="/cart" className="is-dark navbar-item">
                    <span className="cart-item">
                      <i className="fas fa-shopping-bag"></i>
                    </span>
                  </Link>
                </div>
              )}
              <Route
                render={({ history }) => <SearchBox history={history} />}
              />
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
