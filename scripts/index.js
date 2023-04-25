import { API } from './api.js';
import { Todo } from './todo.js';
import { TodoList } from './todo-list.js';
import { TodoListForm } from './todo-list-form.js';

const api = new API('http://localhost:3000/todos');
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
    console.error(`Ошибка при загрузке: ${error}`);
  }
}

async function handleTodoDelete(todo) {
  try {
    await api.deleteTask(todo.getId());
    todo.removeTodo();
  } catch (error) {
    console.error(`Ошибка при удалении: ${error}`);
  }
}

async function handleTodoCreate(value) {
  try {
    const todo = await api.createTask(value);
    todoList.renderItem(todo);
  } catch (error) {
    console.error(`Ошибка при создании: ${error}`);
  }
}
