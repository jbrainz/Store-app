/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>Customer Service</h4>
            <ul>
              <li>
                <Link to="#">About us</Link>
              </li>
              <li>
                <Link to="#">Our services</Link>
              </li>
              <li>
                <Link to="#">Privacy policy</Link>
              </li>
              <li>
                <Link to="#">Careers</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Get help</h4>
            <ul>
              <li>
                <Link to="#">FAQ</Link>
              </li>
              <li>
                <Link to="#">shipping</Link>
              </li>
              <li>
                <Link to="#">returns</Link>
              </li>
              <li>
                <Link to="#">order status</Link>
              </li>
              <li>
                <Link to="#">payment options</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>online shop</h4>
            <ul>
              <li>
                <Link to="#">watch</Link>
              </li>
              <li>
                <Link to="#">bag</Link>
              </li>
              <li>
                <Link to="#">shoes</Link>
              </li>
              <li>
                <Link to="#">dress</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links">
              <Link to="#">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link to="#">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link to="#">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link to="#">
                <i className="fab fa-linkedin-in"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
