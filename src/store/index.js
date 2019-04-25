import Vuex from "vuex";
import Vue from "vue";
import todos from "./modules/todos.js";

//Load vuex
Vue.use(Vuex);

//Create store
export default new Vuex.store({
  module: {
    todos
  }
})