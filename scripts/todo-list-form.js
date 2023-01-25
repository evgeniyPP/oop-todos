export class TodoListForm {
  /** @type {HTMLFormElement} */ #formElement;
  /** @type {Function} */ #onSubmit;

  constructor(formSelector, onSubmit) {
    this.#formElement = document.querySelector(formSelector);
    this.#onSubmit = onSubmit;

    this.#formElement.addEventListener('submit', e => {
      e.preventDefault();

      const inputElement = this.#formElement.elements['new-todo-value'];
      this.#onSubmit(inputElement.value);

      inputElement.value = '';
    });
  }
}
