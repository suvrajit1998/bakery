import { combineReducers } from 'redux'

import directoryreducer from './directory/directory.reducer'
import cardReducer from './card/card.reducer'
import shopReducer from './shop/shop.reducer'
import userReducer from './user/user.reducer'

const rootreducer = combineReducers({
  directory: directoryreducer,
  card: cardReducer,
  collections: shopReducer,
  user: userReducer
})

export default rootreducer
