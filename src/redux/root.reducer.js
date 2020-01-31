import { combineReducers } from 'redux'

import directoryreducer from './directory/directory.reducer'

const rootreducer = combineReducers({
  directory: directoryreducer
})

export default rootreducer
