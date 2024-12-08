<script setup lang="ts">
import TodoForm from './components/TodoForm.vue'
import TodoList from './components/TodoList.vue'

const addTodo = () => {
  // add todo
}
const deleteTodo = () => {
  // deleted todo
}

const updateTodo = () => {
  // update todo
}

const editTodo = () => {
  // editTodo todo
}
const cancelEdit = () => {
  // cancelEdit todo
}

const clearAll = () => {
  // clear all todos
}
</script>
<template>
  <header>
    <div class="wrapper"><h1>Todo</h1></div>
  </header>
  <TodoForm @addTodo="addTodo" @updateTodo="updateTodo" @cancelEdit="cancelEdit" />
  <TodoList :todos="todos" @editTodo="editTodo" @deleteTodo="deleteTodo" @clearAll="clearAll" />
</template>
<style scoped></style>
