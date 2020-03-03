import React from 'react'

import { connect } from 'react-redux'

import MenuItem from '../../components/menu-item/menu-item.component'

import './homepage.style.scss'

const HomePage = ({ sections }) => {
  return (
    <div className="home-page">
      <div className="heading">
        <h3 className="title">ORDER A CAKE FROM YOUR LOCAL BAKERY</h3>
        <span className="subtitle">
          Personalized decorated cakes for every age
        </span>
      </div>
      {sections.map(section => {
        return <MenuItem key={section.id} section={section} />
      })}
    </div>
  )
}

const mapStateToProps = ({ directory: { sections } }) => ({
  sections
})

export default connect(mapStateToProps)(HomePage)
