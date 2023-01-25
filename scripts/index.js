import { Api } from './api.js';
import { Todo } from './todo.js';
import { TodoList } from './todo-list.js';
import { TodoListForm } from './todo-list-form.js';

const config = {
  url: 'http://localhost:3000/todos',
  headers: {
    'Content-Type': 'application/json',
  },
};

const api = new Api(config);

const todoList = new TodoList('.todolist', handleRender);

new TodoListForm('.todolist-form', handleTodoCreate);

getTasks();

function handleRender(data) {
  const todo = new Todo(data, handleTodoDelete, handleTodoCreate);
  const todoElement = todo.createTodo();
  todoList.addItem(todoElement);
}

async function getTasks() {
  try {
    const todos = await api.getTasks();
    todoList.renderItems(todos);
  } catch (error) {
    console.error('Ошибка при загрузке данных');
    console.error(error.message);
  }
}

async function handleTodoDelete(todo) {
  try {
    await api.deleteTask(todo.getId());
    todo.removeTodo();
  } catch (error) {
    console.error('Ошибка при удалении');
    console.error(error);
  }
}

async function handleTodoCreate(value) {
  try {
    const todo = await api.createTask(value);
    todoList.renderItem(todo);
  } catch (error) {
    console.error('Ошибка при создании');
    console.error(error);
  }
}
