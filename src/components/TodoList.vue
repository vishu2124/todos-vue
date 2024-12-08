<script setup lang="ts"></script>
<template>
  <ul>
    <li>
      Todos
      <button>Sort</button>
      <button>Clear All</button>
    </li>
    <li v-if="todos.length === 0">Nothing in the list</li>
    <li v-for="todo in sortedTodos" :key="todo.id"></li>
    <li></li>
  </ul>
</template>
