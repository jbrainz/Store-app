import React from 'react'
import './loader.css'

const Message = ({ error, variant }) => {
  return (
    <div className={`is-flex notification ${variant}`}>
      <h2 className="size-font">{error}</h2>
    </div>
  )
}

export default Message
