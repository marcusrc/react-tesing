import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
  console.log('getVisibleTodos>>>', todos, filter);
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    default:
      return todos
  }
}

const VisibleTodoList = (props) => {
  console.log('VisibleTodoList',props);
  return (
    <TodoList 
      todos={props.todos} 
      onTodoClick={props.onTodoClick}/>
  )
}

// const mapStateToProps = (state, props) => {
//   //console.log('props.todos', props);
//   return {
//     todos: getVisibleTodos(state.todos, state.visibilityFilter)
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onTodoClick: (id) => {
//       dispatch(toggleTodo(id))
//     }
//   }
// }

// const VisibleTodoList = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(TodoList)

VisibleTodoList.propTypes = {
  todos: React.PropTypes.array,
  filter: React.PropTypes.string,
  onTodoClick: React.PropTypes.func
}

export default VisibleTodoList

