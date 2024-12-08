<template>
  <form>
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
    <button type="submit">Add</button>
    <button type="button">Cancel</button>
  </form>
</template>
