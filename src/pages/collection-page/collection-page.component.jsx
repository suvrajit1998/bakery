import React from 'react'

import { connect } from 'react-redux'

import './collection-page.style.scss'
import ItemMenu from '../../components/items-menu/items-menu.component'

const CollectionPage = ({ collections, match }) => {
  const collection = collections ? collections[match.params.collectionId] : null
  const { title, items } = collection
  return (
    <div className="collection-page">
      <h1> {title} </h1>
      <div className="items">
        {items.map(item => (
          <ItemMenu key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = ({ collections }) => ({
  collections
})

export default connect(mapStateToProps)(CollectionPage)
