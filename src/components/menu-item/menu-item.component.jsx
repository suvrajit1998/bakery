import React, { useState } from 'react'

import Modal from 'react-modal'

import { withRouter } from 'react-router-dom'

import './menu-item.style.scss'

import CustomButoon from '../custom-button/custom-button.component'

Modal.setAppElement('#root')

const MenuItem = ({
  section: { title, imageUrl, position, textposition, details, Linkurl },
  match,
  history
}) => {
  const [ishiddne, setishiddne] = useState(false)
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
        <CustomButoon onClick={() => setishiddne(true)}>Bye Now</CustomButoon>
      </span>
      <Modal
        isOpen={ishiddne}
        onRequestClose={() => setishiddne(false)}
        closeTimeoutMS={500}
        className="modal"
      >
        <h1> {title} </h1>
        <span> {details} </span>
        <CustomButoon
          onClick={() => {
            setishiddne(false)
            history.push(`${match.url}${Linkurl}`)
          }}
        >
          Go For It
        </CustomButoon>
      </Modal>
    </div>
  )
}

export default withRouter(MenuItem)
