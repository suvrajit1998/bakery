import React from 'react'

import './collectionmenu.style.scss'

import ItemMenu from '../items-menu/items-menu.component'

const CollectionMenu = ({ title, items }) => {
  return (
    <div className='collection'>
      <h2 className='title'> {title} </h2>
      <div className="collection-menu">
        {items
          .filter((item, idx) => idx < 4)
          .map(item => (
            <ItemMenu key={item.id} item={item} />
          ))}
      </div>
    </div>
  )
}

export default CollectionMenu
