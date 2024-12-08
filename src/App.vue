<script setup lang="ts">
import TodoForm from './components/TodoForm.vue'
import TodoList from './components/TodoList.vue'
</script>
<template>
  <header>
    <div class="wrapper"><h1>Todo</h1></div>
  </header>
  <TodoForm />
  <TodoList />
</template>
