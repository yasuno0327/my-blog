import { combineReducers } from 'redux'
import article from './article'
import user from './user'
import tag from './tag'

const rootReducer = combineReducers({
  article,
  user,
  tag
})

export default rootReducer
