# TodoApp

This is a Todo Application built with Vue 3 and Vite. It allows users to manage tasks efficiently with features such as adding, editing, deleting, sorting, and clearing tasks.

## Features

### 1. **Add Todos**

- Add tasks with a title, priority, and assignee.
- Supported priorities: Critical, Moderate, Optional.
- Easily assign tasks to team members.

### 2. **Edit Todos**

- Modify existing tasks by updating the title, priority, or assignee.

### 3. **Delete Todos**

- Remove individual tasks from the list.

### 4. **Sort Todos**

- Sort tasks by priority: **Critical > Moderate > Optional**.

### 5. **Clear All Todos**

- Remove all tasks from the list with a single click.
- Displays a "Nothing in the list" message when the list is empty.

### 6. **Responsive Design**

- Optimized for use on desktop and mobile devices.

## Type Support for `.vue` Imports in TypeScript

- To enable type checking for `.vue` files, this project uses `vue-tsc` instead of the default `tsc`.
- Install the [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) extension for better TypeScript integration.

---

## Project Setup

Install dependencies:

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile, and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

Run against the development server:

```sh
npm run test:e2e:dev
```

For production build testing:

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## End-to-End Functionality Tests (Cypress)

This application is equipped with a suite of Cypress tests to validate its functionality:

1. **App Loading**: Ensures the app loads and displays the main UI components correctly.
2. **Adding Todos**: Verifies that tasks can be added with the correct details.
3. **Editing Todos**: Ensures users can edit existing tasks and see the updates.
4. **Deleting Todos**: Confirms that tasks can be individually removed from the list.
5. **Sorting Todos**: Validates the sorting functionality for tasks based on priority.
6. **Clearing Todos**: Tests the "Clear All" functionality to ensure it empties the task list.

Before running the app, ensure the following tools are installed:

| Tool   | Minimum Version | Installation Guide                     |
| ------ | --------------- | -------------------------------------- |
| NodeJS | v22.11.0        | [Download NodeJS](https://nodejs.org/) |
| npm    | 10.9.0          | Bundled with NodeJS                    |
