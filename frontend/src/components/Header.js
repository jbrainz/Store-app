/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from 'react'
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
  const [show, setShow] = useState(false)

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
  useEffect(() => {
    if (show) {
      setClassName(false)
      setAdminDropdown(false)
      setMenDropdown(false)
      setWomenDropdown(false)
      setProfile(false)
    }
  }, [show])

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
            <Link onClick={() => setShow(!show)} to="/" className="navbar-item">
              Home
            </Link>
            <div className=" navbar-item has-dropdown is-hoverable">
              <Link
                className="navbar-item"
                onClick={() => setMenDropdown(!menDropdown)}
                to="#"
              >
                MEN
              </Link>
              {menDropdown && (
                <div className="navbar-dropdown">
                  <Link
                    onClick={() => setShow(!show)}
                    to="/sportshirt"
                    className="navbar-item"
                  >
                    SPORT SHIRTS
                  </Link>

                  <Link
                    onClick={() => setShow(!show)}
                    to="/shortsleeve"
                    className="navbar-item"
                  >
                    SHORT SLEEVE
                  </Link>
                  <Link
                    onClick={() => setShow(!show)}
                    to="/polo"
                    className="navbar-item"
                  >
                    POLO
                  </Link>
                  <Link
                    onClick={() => setShow(!show)}
                    to="/polo"
                    className="navbar-item"
                  >
                    T-SHIRT
                  </Link>
                  <Link
                    onClick={() => setShow(!show)}
                    to="/polo"
                    className="navbar-item"
                  >
                    DRESS SHIRTS
                  </Link>
                  <Link
                    onClick={() => setShow(!show)}
                    to="/polo"
                    className="navbar-item"
                  >
                    SPORT COATS
                  </Link>
                </div>
              )}
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <a
                onClick={() => setWomenDropdown(!womenDropdown)}
                className="navbar-item"
              >
                WOMEN
              </a>
              {womenDropdown && (
                <div className="navbar-dropdown">
                  <Link
                    onClick={() => setShow(!show)}
                    to="/tops"
                    className="navbar-item"
                  >
                    TOPS
                  </Link>
                  <Link
                    onClick={() => setShow(!show)}
                    to="/bottoms"
                    className="navbar-item"
                  >
                    BOTTOMS
                  </Link>
                  <Link
                    onClick={() => setShow(!show)}
                    to="/dresses"
                    className="navbar-item"
                  >
                    DRESSES
                  </Link>
                  <Link
                    onClick={() => setShow(!show)}
                    to="/jackets"
                    className="navbar-item"
                  >
                    JACKETS
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
                        onClick={() => setShow(!show)}
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
                        onClick={() => setShow(!show)}
                      >
                        Users
                      </Link>
                      <Link
                        style={{ fontSize: '15px', fontWeight: '700' }}
                        to="/admin/productlist"
                        className="navbar-item"
                        onClick={() => setShow(!show)}
                      >
                        Products
                      </Link>
                      <Link
                        style={{ fontSize: '15px', fontWeight: '700' }}
                        to="/admin/orderlist"
                        className="navbar-item"
                        onClick={() => setShow(!className)}
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
