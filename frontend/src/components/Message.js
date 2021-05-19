import React from 'react'
import './loader.css'

const Message = ({ error, variant, children }) => {
  return (
    <div className={`is-flex notification ${variant}`}>
      <h2 className="size-font">{error}</h2>
      {children}
    </div>
  )
}

export default Message
