import React from 'react'
import { connect } from 'react-redux'
import { addTodo, toggleTodo } from '../actions'
import Footer from '../components/Footer'
import AddTodo from '../components/AddTodo'
import VisibleTodoList from './VisibleTodoList'
import TodoList from '../components/TodoList'

export const App = (props) => {
  // console.log('APP', props.todos);
  return (<div>
    <AddTodo onAdd={props.onAdd}/>
    <VisibleTodoList 
      todos={props.todos} 
      filter={props.filter} 
      onTodoClick={props.onTodoClick}/>
    <Footer />
  </div>
)}

// App.contextTypes={
//   store : React.PropTypes.object
// }
export default connect(
  (state, props)=>{
    // console.log('APP in connect>>>', state, props);
    return{
      todos: state.todos,
      filter: state.visibilityFilter
    }
  },
  (dispatch, props) =>({
    onAdd: (text) => {
      dispatch(addTodo(text))
    },
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
  })
)(App) 
