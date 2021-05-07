import React from 'react'
import './loader.css'

const Message = ({ error, variant }) => {
  return (
    <div
      style={{ opacity: 0.6 }}
      className={`notification ${variant} is-light`}
    >
      <h2 className="size-font">{error}</h2>
    </div>
  )
}

export default Message
