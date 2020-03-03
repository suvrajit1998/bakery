import React from 'react'

import { Route } from 'react-router-dom'

import CollectionOverview from '../../components/collection-overview/collection-overview.component'
import CollectionPage from '../collection-page/collection-page.component'

const Ourmenu = ({ match }) => {
  return (
    <div className="our-menu">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route
        exact
        path={`${match.path}/:collectionId`}
        component={CollectionPage}
      />
    </div>
  )
}

export default Ourmenu
