export class TodoList {
  /** @type {HTMLDivElement} */ #listElement;
  /** @type {Function} */ #onRender;

  constructor(listSelector, onRender) {
    this.#listElement = document.querySelector(listSelector);
    this.#onRender = onRender;
  }

  addItem(element) {
    this.#listElement.append(element);
  }

  renderItems(todos) {
    todos.forEach(todo => this.renderItem(todo));
  }

  renderItem(todo) {
    this.#onRender(todo);
  }
}
