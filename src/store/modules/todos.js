import axios from "axios";

const api_url = "http://localhost:3000/api/v1/todos";

const state = {
  todos: []
};

const getters = {
  allTodos: (state) => state.todos
};

const actions = {
  async fetchTodos({ commit }) {
    const response = await axios.get(api_url);
    commit("setTodos", response.data);
  },
  async deleteTodo({ commit }, id) {
    const response = await axios.delete(api_url + `/${id}`);
    commit("removeTodo", id);
  },
  async updateTodo({ commit }, updatedTodo) {
    const response = await axios.put(api_url + `/${updatedTodo.id}`, {
      todo: { ...updatedTodo }
    });
    commit("setUpdatedTodo", response.data);
  },
  async addTodo({ commit }, title) {
    const response = await axios.post(api_url, {
      todo: {
        title,
        completed: false
      }
    });
    commit("newTodo", response.data);
  },
  async filterTodos({ commit }, event) {
    const limit = parseInt(event.target.options[event.target.options.selectedIndex].innerText);
    const response = await axios.get(api_url + `?limit=${limit}`);
    commit("setTodos", response.data);
  }
};

const mutations = {
  setTodos: (state, todos) => {
    state.todos = todos;
  },
  removeTodo: (state, id) => {
    const newTodos = state.todos.filter(todo => todo.id !== id);
    state.todos = newTodos;
  },
  setUpdatedTodo: (state, updatedTodo) => {
    const index = state.todos.findIndex(todo => todo.id === updatedTodo.id);
    if (index !== -1  ) {
      state.todos.splice(index, 1, updatedTodo);
    }
  },
  newTodo: (state, todo) => {
    state.todos = [todo, ...state.todos];
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}