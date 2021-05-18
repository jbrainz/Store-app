import { useState } from 'react'
import './header.css'

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="field has-addons">
        <div className="control">
          <input
            className="input round"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            type="text"
            placeholder="Search product..."
          />
        </div>
        <div className="control">
          <button type="submit" className="button is-primary is-outlined">
            Search
          </button>
        </div>
      </div>
    </form>
  )
}

export default SearchBox
