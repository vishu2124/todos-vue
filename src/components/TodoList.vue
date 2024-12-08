<template>
  <ul>
    <li>
      Todos
      <button v-if="todos.length !== 0" @click="toggleSortOrder">
        Sort {{ isAscending ? 'Descending' : 'Ascending' }}
      </button>
      <button v-if="todos.length !== 0" @click="$emit('clearAll')">Clear All</button>
    </li>
    <li v-if="todos.length === 0">Nothing in the list</li>
    <li v-for="todo in sortedTodos" :key="todo.id">
      <!-- Title and Assignee Section -->
      <div class="title-wrapper">
        <span>{{ todo.title }}</span>
        <span class="assignee">Assigned to: {{ todo.assignee }}</span>
      </div>

      <!-- Priority Badge -->
      <span :class="`priority-badge priority-badge-${todo.priority}`">{{ todo.priority }}</span>

      <!-- Buttons -->
      <button @click="$emit('editTodo', todo)">Edit</button>
      <button @click="$emit('deleteTodo', todo.id)">Delete</button>
    </li>
    <li></li>
  </ul>
</template>

<script lang="ts">
import { computed, ref } from 'vue'

export default {
  props: ['todos'],
  emits: ['editTodo', 'deleteTodo', 'clearAll'],
  setup(props) {
    const isAscending = ref(true)

    // Function to toggle the sorting order
    const toggleSortOrder = () => {
      isAscending.value = !isAscending.value
    }

    // Computed property to sort the todos based on the selected order
    const sortedTodos = computed(() => {
      const priorityOrder = { critical: 1, moderate: 2, optional: 3 }
      return [...props.todos].sort((a, b) => {
        const comparison = priorityOrder[a.priority] - priorityOrder[b.priority]
        return isAscending.value ? comparison : -comparison
      })
    })

    return { sortedTodos, toggleSortOrder, isAscending }
  },
}
</script>
