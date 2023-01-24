import { Api } from './api';
import { Todo } from './todo';
import { TodoList } from './todo-list';
import { TodoListForm } from './todo-list-form';

const config = {
  url: '',
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
    todo.remove();
  } catch (error) {
    console.error('Ошибка при удалении');
    console.error(error);
  }
}

async function handleTodoCreate(name) {
  try {
    const todo = await api.createTask(name);
    todoList.renderItem(todo);
  } catch (error) {
    console.error('Ошибка при создании');
    console.error(error);
  }
}
