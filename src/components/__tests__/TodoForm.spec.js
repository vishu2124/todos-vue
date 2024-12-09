import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import TodoForm from '../TodoForm.vue'

describe('TodoForm', () => {
  let wrapper

  beforeEach(() => {
    // Mount the component before each test
    wrapper = mount(TodoForm, {
      props: {
        todoToEdit: null, // Initially no todo to edit
      },
    })
  })

  it('renders the form with input fields', () => {
    const input = wrapper.find('input')
    const prioritySelect = wrapper.find('select')
    const button = wrapper.find('button')

    expect(input.exists()).toBe(true)
    expect(prioritySelect.exists()).toBe(true)
    expect(button.exists()).toBe(true)
    expect(button.text()).toBe('Add') // Initial button text
  })

  it('emits addTodo with correct values when form is submitted', async () => {
    // Set values in form fields
    await wrapper.find('input').setValue('New Task')
    await wrapper.find('select').setValue('moderate')
    await wrapper.findAll('select')[1].setValue('John')

    // Simulate form submission
    await wrapper.find('form').trigger('submit.prevent')

    // Check that addTodo was emitted with correct data
    const emittedEvents = wrapper.emitted('addTodo')
    expect(emittedEvents).toBeTruthy()
    expect(emittedEvents[0][0]).toEqual({
      title: 'New Task',
      priority: 'moderate',
      assignee: 'John',
      id: expect.any(String), // Since the ID is generated dynamically, we expect it to be a string
    })
  })

  it('emits updateTodo when editing an existing todo', async () => {
    // Pass a todo object to the form (editing scenario)
    await wrapper.setProps({
      todoToEdit: { id: '1', title: 'Existing Task', priority: 'critical', assignee: 'Jack' },
    })

    // Check that the input fields are populated with the existing todo data
    const input = wrapper.find('input')
    const prioritySelect = wrapper.find('select')
    const assigneeSelect = wrapper.findAll('select')[1]

    expect(input.element.value).toBe('Existing Task')
    expect(prioritySelect.element.value).toBe('critical')
    expect(assigneeSelect.element.value).toBe('Jack')

    // Modify values and submit the form
    await input.setValue('Updated Task')
    await prioritySelect.setValue('moderate')
    await assigneeSelect.setValue('John')

    // Simulate form submission
    await wrapper.find('form').trigger('submit.prevent')

    // Check that updateTodo was emitted with correct data
    const emittedEvents = wrapper.emitted('updateTodo')
    expect(emittedEvents).toBeTruthy()
    expect(emittedEvents[0][0]).toEqual({
      id: '1',
      title: 'Updated Task',
      priority: 'moderate',
      assignee: 'John',
    })
  })

  it('clears form after submission', async () => {
    // Set values in form fields
    await wrapper.find('input').setValue('Another Task')
    await wrapper.find('select').setValue('optional')
    await wrapper.findAll('select')[1].setValue('Jack')

    // Submit the form
    await wrapper.find('form').trigger('submit.prevent')

    // Check that the form is cleared after submission
    expect(wrapper.find('input').element.value).toBe('')
    expect(wrapper.find('select').element.value).toBe('')
    expect(wrapper.findAll('select')[1].element.value).toBe('')
  })
})
