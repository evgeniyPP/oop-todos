import { Api } from './api.js';
import { TodoListForm } from './todo-list-form.js';
import { TodoList } from './todo-list.js';
import { Todo } from './todo.js';

const api = new Api('http://localhost:3000/todos');
const todoList = new TodoList('.todolist');

new TodoListForm('.todolist-form', handleTodoCreate);

getTodos();

function getTodos() {
  api
    .fetchTodos()
    .then(todos => {
      todos.forEach(todo => render(todo));
    })
    .catch(err => {
      console.error(`Ошибка: ${err}`);
    });
}

function handleTodoCreate(value) {
  api
    .createTodo(value)
    .then(todo => {
      render(todo);
    })
    .catch(err => {
      console.error(`Ошибка: ${err}`);
    });
}

function handleTodoDelete(id, element) {
  api
    .deleteTodos(id)
    .then(() => {
      element.remove();
    })
    .catch(err => {
      console.error(`Ошибка: ${err}`);
    });
}

function render(data) {
  const todo = new Todo(handleTodoCreate, handleTodoDelete);
  const todoElement = todo.createElement(data);
  todoList.addItem(todoElement);
}
