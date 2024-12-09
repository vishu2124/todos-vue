describe('App Loading', () => {
  it('should load the app and display the correct content', () => {
    cy.visit('http://localhost:5173')
    cy.get('h1').contains('Todo').should('be.visible')
    cy.get('button').contains('Add').should('be.visible')
  })
})

describe('Todo Form adds', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173')
  })

  it('should allow adding a new todo', () => {
    cy.get('input').type('Hello world')
    cy.get('select').eq(0).select('critical')
    cy.get('select').eq(1).select('John')
    cy.get('button[type="submit"]').click()
    cy.get('li').contains('Hello world').should('be.visible')
    cy.get('li').contains('Assigned to: John').should('be.visible')
    cy.get('li').contains('critical').should('be.visible')
  })
})

describe('Todo Form', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173')
  })

  it('should allow adding three tasks and identify them in the todo list', () => {
    cy.get('input').type('Task 1')
    cy.get('select').eq(0).select('optional')
    cy.get('select').eq(1).select('Jack')
    cy.get('button[type="submit"]').click()

    cy.get('input').type('Task 2')
    cy.get('select').eq(0).select('critical')
    cy.get('select').eq(1).select('John')
    cy.get('button[type="submit"]').click()

    cy.get('input').type('Task 3')
    cy.get('select').eq(0).select('moderate')
    cy.get('select').eq(1).select('Justin')
    cy.get('button[type="submit"]').click()

    cy.get('li').contains('Task 1').should('be.visible')
    cy.get('li').contains('Assigned to: Jack').should('be.visible')
    cy.get('li').contains('optional').should('be.visible')

    cy.get('li').contains('Task 2').should('be.visible')
    cy.get('li').contains('Assigned to: John').should('be.visible')
    cy.get('li').contains('critical').should('be.visible')

    cy.get('li').contains('Task 3').should('be.visible')
    cy.get('li').contains('Assigned to: Justin').should('be.visible')
    cy.get('li').contains('moderate').should('be.visible')
  })
})

describe('Todo Form with Sorting', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173')
  })

  it('should allow adding three tasks with priorities and sort them when clicking on the "Sort" button', () => {
    cy.get('input').type('Task 1')
    cy.get('select').eq(0).select('critical')
    cy.get('select').eq(1).select('Jack')
    cy.get('button[type="submit"]').click()

    cy.get('input').type('Task 2')
    cy.get('select').eq(0).select('optional')
    cy.get('select').eq(1).select('John')
    cy.get('button[type="submit"]').click()

    cy.get('input').type('Task 3')
    cy.get('select').eq(0).select('moderate')
    cy.get('select').eq(1).select('Justin')
    cy.get('button[type="submit"]').click()

    cy.get('li').contains('Task 1').should('be.visible')
    cy.get('li').contains('Assigned to: Jack').should('be.visible')
    cy.get('li').contains('critical').should('be.visible')

    cy.get('li').contains('Task 2').should('be.visible')
    cy.get('li').contains('Assigned to: John').should('be.visible')
    cy.get('li').contains('optional').should('be.visible')

    cy.get('li').contains('Task 3').should('be.visible')
    cy.get('li').contains('Assigned to: Justin').should('be.visible')
    cy.get('li').contains('moderate').should('be.visible')

    cy.get('button').contains('Sort').click()
    cy.wait(2000)

    cy.get('.priority-badge').first().should('contain.text', 'optional')
    cy.get('.priority-badge').eq(1).should('contain.text', 'moderate')
    cy.get('.priority-badge').last().should('contain.text', 'critical')
  })
})

describe('Todo Form with Editing', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173')
  })

  it('should allow adding two tasks, editing one, and checking the updated task in the list', () => {
    cy.get('input').type('Task 1')
    cy.get('select').eq(0).select('critical')
    cy.get('select').eq(1).select('Jack')
    cy.get('button[type="submit"]').click()

    cy.get('input').type('Task 2')
    cy.get('select').eq(0).select('optional')
    cy.get('select').eq(1).select('John')
    cy.get('button[type="submit"]').click()

    cy.get('li').contains('Task 1').should('be.visible')
    cy.get('li').contains('Assigned to: Jack').should('be.visible')
    cy.get('li').contains('critical').should('be.visible')

    cy.get('li').contains('Task 2').should('be.visible')
    cy.get('li').contains('Assigned to: John').should('be.visible')
    cy.get('li').contains('optional').should('be.visible')

    cy.get('button').contains('Edit').first().click()

    cy.get('input').clear().type('Updated Task 1')
    cy.get('select').eq(0).select('moderate')
    cy.get('select').eq(1).select('Justin')
    cy.wait(2000)
    cy.get('button[type="submit"]').click()

    cy.get('li').contains('Updated Task 1').should('be.visible')
    cy.get('li').contains('Assigned to: Justin').should('be.visible')
    cy.get('li').contains('moderate').should('be.visible')

    cy.get('li').contains('Task 2').should('be.visible')
    cy.get('li').contains('Assigned to: John').should('be.visible')
    cy.get('li').contains('optional').should('be.visible')
  })
})

describe('Todo Form with Deletion', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173')
  })

  it('should allow adding three tasks and delete the task with "optional" priority', () => {
    cy.get('input').type('Task 1')
    cy.get('select').eq(0).select('critical')
    cy.get('select').eq(1).select('Jack')
    cy.get('button[type="submit"]').click()

    cy.get('input').type('Task 2')
    cy.get('select').eq(0).select('moderate')
    cy.get('select').eq(1).select('John')
    cy.get('button[type="submit"]').click()

    cy.get('input').type('Task 3')
    cy.get('select').eq(0).select('optional')
    cy.get('select').eq(1).select('Justin')
    cy.get('button[type="submit"]').click()

    cy.get('li').contains('Task 1').should('be.visible')
    cy.get('li').contains('Assigned to: Jack').should('be.visible')
    cy.get('li').contains('critical').should('be.visible')

    cy.get('li').contains('Task 2').should('be.visible')
    cy.get('li').contains('Assigned to: John').should('be.visible')
    cy.get('li').contains('moderate').should('be.visible')

    cy.get('li').contains('Task 3').should('be.visible')
    cy.get('li').contains('Assigned to: Justin').should('be.visible')
    cy.get('li').contains('optional').should('be.visible')

    cy.get('button').contains('Sort').click()
    cy.wait(2000)

    cy.get('button').contains('Delete').last().click()
    cy.get('li').contains('Task 3').should('not.exist')

    cy.get('li').contains('Task 1').should('be.visible')
    cy.get('li').contains('Task 2').should('be.visible')
  })
})

describe('Todo Form with Clear All Button', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173')
  })

  it('should allow adding tasks and clear all tasks', () => {
    cy.get('input').type('Task 1')
    cy.get('select').eq(0).select('critical')
    cy.get('select').eq(1).select('Jack')
    cy.get('button[type="submit"]').click()

    cy.get('li').contains('Task 1').should('be.visible')

    cy.get('button').contains('Clear All').click()

    cy.get('li').contains('Task 1').should('not.exist')
    cy.get('li').contains('Nothing in the list').should('be.visible')
  })
})
