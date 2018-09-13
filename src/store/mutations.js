import * as types from './mutation-types'
export default {
  [types.ADD_TODO] (state, todo) {
    state.todos.push(todo)
  },
  [types.DONE_TODO] (state, id) {
    const todo = state.todos.find(todo => todo.id === id)
    if (todo) todo.done = true
  }
}
