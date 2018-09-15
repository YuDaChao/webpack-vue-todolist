import * as types from './mutation-types'
export default {
  [types.ADD_TODO] (state, todo) {
    state.todos.push(todo)
  },
  [types.DONE_TODO] (state, id) {
    const todo = state.todos.find(todo => todo.id === id)
    if (todo) todo.done = true
  },
  [types.DELETE_TODO] (state, id) {
    const index = state.todos.findIndex(todo => todo.id === id)
    state.todos.splice(index, 1)
  },
  [types.DELETE_TODOS] (state, ids) {
    state.todos.forEach((todo, index) => {
      if (ids.indexOf(todo.id) > -1) {
        state.todos.splice(index, 1)
      }
    })
  },
  [types.DONE_TODOS] (state, ids) {
    state.todos.forEach((todo, index) => {
      if (ids.indexOf(todo.id) > -1) {
        todo.done = true
      }
    })
  }
}
