import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 1,
    todos:[{id:1,text:' ', done: true},{id:2,text:' ',done: false}]
  },
  getters: {
doneTodos: state => {return state.todos.filter(todo=>!todo.done) },
getTodoById: (state) => (id) => {return state.todos.find(todo=>todo.id===id) }


  },
  mutations: {
    increment(state, payload){
      state.count+= payload.amount
    }
  },
  actions: {
  },
  modules: {
  }
})
