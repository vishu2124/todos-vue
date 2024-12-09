import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import TodoList from '@/components/TodoList.vue'

describe('TodoList', () => {
  const todos = [
    { id: '1', title: 'Todo 1', assignee: 'John', priority: 'critical' },
    { id: '2', title: 'Todo 2', assignee: 'Jack', priority: 'moderate' },
    { id: '3', title: 'Todo 3', assignee: 'Justin', priority: 'optional' },
  ]

  it('renders todos correctly', () => {
    const wrapper = mount(TodoList, {
      props: { todos },
    })

    expect(wrapper.findAll('li').length).toBe(5) // Includes 3 todos + 2 extra li elements
    expect(wrapper.text()).toContain('Todo 1')
    expect(wrapper.text()).toContain('Todo 2')
    expect(wrapper.text()).toContain('Todo 3')
  })

  it('shows "Nothing in the list" when no todos are passed', () => {
    const wrapper = mount(TodoList, {
      props: { todos: [] },
    })
    expect(wrapper.text()).toContain('Nothing in the list')
  })

  it('shows sort button if we have items', () => {
    const wrapper = mount(TodoList, {
      props: { todos },
    })

    // Check if the "Sort" button is visible when there are todos
    const sortButton = wrapper.find('button')
    expect(sortButton.exists()).toBe(true)
    expect(sortButton.text()).toBe('Sort Descending') // It should display "Sort Descending" initially
  })

  it('does not show sort button if there are no items', () => {
    const wrapper = mount(TodoList, {
      props: { todos: [] }, // No todos
    })

    // Ensure the sort button is not rendered when there are no todos
    const sortButton = wrapper.find('button')
    expect(sortButton.exists()).toBe(false)
  })
  it('shows "Clear All" button if we have items', () => {
    const wrapper = mount(TodoList, {
      props: { todos },
    })

    // Check if the "Clear All" button is visible when there are todos
    const clearAllButton = wrapper.findAll('button').at(1) // Assuming it's the second button
    expect(clearAllButton.exists()).toBe(true)
    expect(clearAllButton.text()).toBe('Clear All') // The button should display "Clear All"
  })

  it('does not show "Clear All" button if there are no items', () => {
    const wrapper = mount(TodoList, {
      props: { todos: [] }, // No todos
    })

    // Ensure the "Clear All" button is not rendered when there are no todos
    const clearAllButton = wrapper.findAll('button').at(0) // Check the second button
    expect(clearAllButton).toBe(undefined) // It should not exist
  })
})
