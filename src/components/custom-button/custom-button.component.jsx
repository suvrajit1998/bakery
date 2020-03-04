import React from 'react'

import './custom-button.style.scss'

const CustomButoon = ({ children, ...props }) => {
  return (
    <button className="custom-button" {...props}>
      {children}
    </button>
  )
}

export default CustomButoon
