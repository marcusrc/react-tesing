import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

export const AddTodo = (props) => {
  let input
  // console.log('AddTodo>>>', props);
  return (
    <div>
      <form onSubmit={e => {
        // console.log('on submit!!!!');
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        props.onAdd(input.value)
        // console.log('intput.value:::',input.value);
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

AddTodo.propTypes = {
  onAdd : React.PropTypes.func.isRequired
}
// AddTodo.contextTypes = {
//   store : React.PropTypes.object
// }

export default AddTodo;
