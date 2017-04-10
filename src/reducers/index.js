import {
  combineReducers
} from 'redux'
import {
  routerReducer as routing
} from 'react-router-redux'
import todos from './todos'
import auth from './auth'

export default combineReducers({
  routing,
  todos,
  auth
})
