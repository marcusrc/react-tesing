import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
// const initialState = { 
//   todos: [], 
//   visibilityFilter:'SHOW_ALL' 
// }
const todoApp = combineReducers({
  todos,
  visibilityFilter
})

export default todoApp
