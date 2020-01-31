import React from 'react'

import './custom-button.style.scss'

const CustomButoon = ({ children, ...props }) => {
  return <div className="custom-button"> {children} </div>
}

export default CustomButoon
