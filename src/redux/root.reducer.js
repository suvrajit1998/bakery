import { combineReducers } from 'redux'

import directoryreducer from './directory/directory.reducer'
import cardReducer from './card/card.reducer'
import shopReducer from "./shop/shop.reducer"

const rootreducer = combineReducers({
  directory: directoryreducer,
  card: cardReducer,
  collections: shopReducer
})

export default rootreducer
