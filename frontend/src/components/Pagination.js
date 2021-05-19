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
                <a
                  href="/"
                  disabled={x + 1 === page}
                  className={
                    x + 1 === page
                      ? 'pagination-link is-current disabled'
                      : 'pagination-link'
                  }
                >
                  {x + 1}
                </a>
              </li>
            </ul>
          </NavLink>
        ))}
        {/* <NavLink
        className="pagination-previous"
        title="This is the first page"
        disabled={page===1}
      >
        Previous
      </NavLink>
      <NavLink className="pagination-next">Next page</NavLink>
      <ul className="pagination-list">
        <li>
          <NavLink
            className="pagination-link is-current"
            aria-label="Page 1"
            aria-current="page"
          >
            1
          </NavLink>
        </li>
        <li>
          <NavLink className="pagination-link" aria-label="Goto page 2">
            2
          </NavLink>
        </li>
        <li>
          <NavLink className="pagination-link" aria-label="Goto page 3">
            3
          </NavLink>
        </li>
      </ul> */}
      </nav>
    )
  )
}

export default Pagination
