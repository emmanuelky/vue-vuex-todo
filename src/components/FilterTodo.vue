<template>
  <div>
    <h3>Filter Todo</h3>
    <select @change="filterTodo($event)">
      <option value="200">10</option>
      <option value="100">8</option>
      <option value="50">6</option>
      <option value="20">4</option>
      <option value="10">2</option>
      <option value="5">0</option>
    </select>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "FilterTodo",
  methods: {
    ...mapActions(["filterTodo"])
  }
};
</script>

<style>
select {
  margin-top: 20px;
  padding: 6px;
  border: #41b883 1px solid;
}
</style>
