import { handleTodoCreate } from './utils.js';

const formElement = document.querySelector('.todolist-form');

formElement.addEventListener('submit', e => {
  e.preventDefault();

  const inputElement = formElement.elements['new-todo-value'];
  handleTodoCreate(inputElement.value);

  inputElement.value = '';
});
