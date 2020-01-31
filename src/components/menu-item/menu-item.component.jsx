import React from 'react'

import './menu-item.style.scss'

import CustomButoon from '../custom-button/custom-button.component'

const MenuItem = ({
  section: { title, imageUrl, position, textposition, details }
}) => {
  return (
    <div className="menu-item" data-aos={`fade-${position}`}>
      <div className={`${position} wrapper`}>
        <div
          className="background-image"
          style={{
            backgroundImage: `url(${imageUrl})`
          }}
        >
          <div className="content">
            <h1 className="title"> {title} </h1>
            <span className="subtitle"> Shop Now </span>
          </div>
        </div>
      </div>
      <span className={`${textposition} text-body`}>
        <span className="details">{details}</span>
        <CustomButoon>Bye Now</CustomButoon>
      </span>
    </div>
  )
}

export default MenuItem
