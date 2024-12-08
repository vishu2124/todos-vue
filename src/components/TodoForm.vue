<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="title" placeholder="Enter task" required />
    <select v-model="priority" required>
      <option value="">-Priority-</option>
      <option value="critical">Critical</option>
      <option value="moderate">Moderate</option>
      <option value="optional">Optional</option>
    </select>
    <select v-model="assignee" required>
      <option value="">-Assignee-</option>
      <option value="John">John</option>
      <option value="Jack">Jack</option>
      <option value="Justin">Justin</option>
    </select>
    <button type="submit">{{ isEditing ? 'Update' : 'Add' }}</button>
    <button type="button" v-if="isEditing" @click="cancelEdit">Cancel</button>
  </form>
</template>

<script lang="ts">
import { ref, watch } from 'vue'

export default {
  props: {
    todoToEdit: {
      type: Object,
      default: null,
    },
  },
  emits: ['addTodo', 'updateTodo', 'cancelEdit'],
  setup(props, { emit }) {
    const title = ref('')
    const priority = ref('optional')
    const assignee = ref('')
    const isEditing = ref(false)

    watch(
      () => props.todoToEdit,
      (newTodo) => {
        if (newTodo) {
          isEditing.value = true
          title.value = newTodo.title
          priority.value = newTodo.priority
          assignee.value = newTodo.assignee
        }
      },
      { immediate: true },
    )

    const resetForm = () => {
      title.value = ''
      priority.value = ''
      assignee.value = ''
      isEditing.value = false
    }
    const cancelEdit = () => {
      resetForm()
      emit('cancelEdit')
    }

    const handleSubmit = () => {
      const todo = {
        title: title.value,
        priority: priority.value,
        assignee: assignee.value,
      }
      if (isEditing.value) {
        emit('updateTodo', { ...props.todoToEdit, ...todo }) // Emit updated todo
      } else {
        todo.id = Date.now().toString()
        emit('addTodo', todo) // Emit new todo
      }
      resetForm()
    }

    return {
      isEditing,
      title,
      priority,
      assignee,
      handleSubmit,
      cancelEdit,
    }
  },
}
</script>
