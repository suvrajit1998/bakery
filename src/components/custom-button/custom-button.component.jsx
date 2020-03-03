import React from 'react'

import './custom-button.style.scss'

const CustomButoon = ({ children, ...props }) => {
  return <div className="custom-button" {...props} > {children} </div>
}

export default CustomButoon
