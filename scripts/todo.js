import { handleTodoDelete, handleTodoCreate } from './utils.js';

export const template = document.querySelector('#todolist-item-template').content;

export function createTodoElement(data) {
  const todoElement = template.cloneNode(true).children[0];

  const textElement = todoElement.querySelector('.todolist-item__text');
  textElement.textContent = data.value;
  textElement.dataset.id = data.id;

  const deleteButtonElement = todoElement.querySelector('.todolist-item__del');
  deleteButtonElement.addEventListener('click', () => {
    handleTodoDelete(data.id, todoElement);
  });

  const copyButtonElement = todoElement.querySelector('.todolist-item__copy');
  copyButtonElement.addEventListener('click', () => {
    handleTodoCreate(data.value);
  });

  return todoElement;
}
