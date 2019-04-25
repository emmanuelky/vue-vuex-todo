import axios from "axios";

const state = {
  todos: [
    {
      id: 1,
      title: "Title one"
    },
    {
      id: 2,
      title: "Title two"
    }
  ]
};

const getters = {
allTodos: (state) => state.todos

};

const actions = {};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations
};
