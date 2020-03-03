import React from 'react'
import { connect } from 'react-redux'

import './collection-overview.style.scss'
import CollectionMenu from '../collectionofmenu/collectionmenu.component'

const CollectionOverview = ({ collections }) => {
  const collection = collections
    ? Object.keys(collections).map(key => collections[key])
    : []
  return (
    <div className='collection-overview'>
      {collection.map(({ id, ...otherCollection }) => (
        <CollectionMenu key={id} {...otherCollection} />
      ))}
    </div>
  )
}

const mapStateToProps = ({ collections }) => ({
  collections
})

export default connect(mapStateToProps)(CollectionOverview)
