import * as api from './api.js';
import * as todoList from './todo-list.js';
import { createTodoElement } from './todo.js';

export function getTodos() {
  api
    .getTodos()
    .then(todos => {
      todos.forEach(todo => render(todo));
    })
    .catch(err => {
      console.error(`Ошибка: ${err}`);
    });
}

export function handleTodoCreate(value) {
  api
    .createTodo(value)
    .then(todo => {
      render(todo);
    })
    .catch(err => {
      console.error(`Ошибка: ${err}`);
    });
}

export function handleTodoDelete(id, element) {
  api
    .deleteTodos(id)
    .then(() => {
      element.remove();
    })
    .catch(err => {
      console.error(`Ошибка: ${err}`);
    });
}

export function render(data) {
  const todoElement = createTodoElement(data);
  todoList.addItem(todoElement);
}
