export class TodoListForm {
  /** @type {HTMLFormElement} */ #formElement;
  /** @type {Function} */ #onSubmit;

  constructor(formSelector, onSubmit) {
    this.#formElement = document.querySelector(formSelector);
    this.#onSubmit = onSubmit;

    this.#formElement.addEventListener('submit', e => {
      e.preventDefault();
      const newTodoName = this.#formElement.elements['todo-name'].value;
      this.#onSubmit(newTodoName);
    });
  }
}
