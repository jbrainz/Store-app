import React from 'react'
import './loader.css'

const Message = ({ error }) => {
  return (
    <div style={{ opacity: 0.6 }} class="notification is-danger is-light">
      <h2 className="size-font">{error}</h2>
    </div>
  )
}

export default Message
