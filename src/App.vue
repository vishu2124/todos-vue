<script setup lang="ts">
import TodoForm from './components/TodoForm.vue'
import TodoList from './components/TodoList.vue'
import useLocalStorage from './composables/useLocalStorage'
import { ref } from 'vue'

const { storedValue: todos, setStoredValue } = useLocalStorage('todos', [])
const selectedTodo = ref(null)

const addTodo = (todo) => {
  todos.value.push(todo)
  setStoredValue(todos.value)
}
const deleteTodo = (id) => {
  todos.value = todos.value.filter((todo) => todo.id !== id)
  setStoredValue(todos.value)
}

const updateTodo = (updatedTodo) => {
  const index = todos.value.findIndex((todo) => {
    console.log(todo)
    return todo.id === updatedTodo.id
  })
  if (index !== -1) {
    todos.value[index] = updatedTodo
    setStoredValue(todos.value)
  }
  selectedTodo.value = null
}

const editTodo = (todo) => {
  selectedTodo.value = todo
}
const cancelEdit = () => {
  selectedTodo.value = null
}

const clearAll = () => {
  todos.value = []
  setStoredValue([])
}
</script>

<template>
  <header>
    <div class="wrapper"><h1>Todo</h1></div>
  </header>

  <TodoForm
    :todo-to-edit="selectedTodo"
    @addTodo="addTodo"
    @updateTodo="updateTodo"
    @cancelEdit="cancelEdit"
  />

  <TodoList :todos="todos" @editTodo="editTodo" @deleteTodo="deleteTodo" @clearAll="clearAll" />
</template>

<style scoped></style>
