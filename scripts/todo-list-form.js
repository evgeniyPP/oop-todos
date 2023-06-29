export class TodoListForm {
  constructor(formSelector, createTodo) {
    this.formElement = document.querySelector(formSelector);

    this.formElement.addEventListener('submit', e => {
      e.preventDefault();

      const inputElement = this.formElement.elements['new-todo-value'];
      createTodo(inputElement.value);

      inputElement.value = '';
    });
  }
}
