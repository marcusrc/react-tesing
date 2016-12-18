const todo = (state = {}, action) => {
   console.log('reducer!!!todo!!!', action.type);
  switch (action.type) {
    case 'ADD_TODO':
      state = {
        id: action.id,
        text: action.text,
        completed: false
      }
      console.log('ADD_TODO>>>', state);
      return state
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        completed: !state.completed
      })

    default:
      return state
  }
}

const todos = (state = [], action) => {
  console.log('reducer!!!todos!!!', action.type, state);
  switch (action.type) {
    case 'ADD_TODO':
      state = [
        ...state,
        todo(undefined, action)
      ]
      console.log('todos!!!>>', state);
      
      return state
      // return state
    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      )
    default:
      return state
  }
}

export default todos