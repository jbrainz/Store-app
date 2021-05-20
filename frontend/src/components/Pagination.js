import { NavLink } from 'react-router-dom'
import './form.css'

const Pagination = ({ pages, page, isAdmin = false, keyword = '' }) => {
  return (
    pages > 1 && (
      <nav
        className="pagination is-just"
        role="navigation"
        aria-label="pagination"
      >
        {[...Array(pages).keys()].map((x) => (
          <NavLink
            key={x + 1}
            to={
              !isAdmin
                ? keyword
                  ? `/search/${keyword}/page/${x + 1}`
                  : `/page/${x + 1}`
                : `/admin/productlist/${x + 1}`
            }
          >
            <ul className="pagination-list">
              <li>
                <div
                  disabled={x + 1 === page}
                  className={
                    x + 1 === page
                      ? 'pagination-link is-current disabled'
                      : 'pagination-link'
                  }
                >
                  {x + 1}
                </div>
              </li>
            </ul>
          </NavLink>
        ))}
      </nav>
    )
  )
}

export default Pagination
