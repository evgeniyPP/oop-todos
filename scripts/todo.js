export class Todo {
  #todoElement;
  #data;
  #onDelete;
  #onCopy;

  static #template = document.querySelector('#todolist-item-template').content;

  constructor(data, onDelete, onCopy) {
    this.#todoElement = null;
    this.#data = data;
    this.#onDelete = onDelete;
    this.#onCopy = onCopy;
  }

  getId() {
    return this.#data.id;
  }

  createTodo() {
    this.#todoElement = Todo.#template.cloneNode(true).children[0];

    const textElement = this.#todoElement.querySelector('.todolist-item__text');
    textElement.textContent = this.#data.value;
    textElement.dataset.todoId = this.#data.id;

    const deleteButtonElement = this.#todoElement.querySelector('.todolist-item__del');
    deleteButtonElement.addEventListener('click', () => {
      this.#onDelete(this);
    });

    const copyButtonElement = this.#todoElement.querySelector('.todolist-item__copy');
    copyButtonElement.addEventListener('click', () => {
      this.#onCopy(this.#data.value);
    });

    return this.#todoElement;
  }

  removeTodo() {
    this.#todoElement.remove();
    this.#todoElement = null;
  }
}
