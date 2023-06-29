export class Todo {
  static template = document.querySelector('#todolist-item-template').content;

  constructor(createTodo, deleteTodo) {
    this.createTodo = createTodo;
    this.deleteTodo = deleteTodo;
  }

  createElement(data) {
    const todoElement = Todo.template.cloneNode(true).children[0];

    const textElement = todoElement.querySelector('.todolist-item__text');
    textElement.textContent = data.value;
    textElement.dataset.id = data.id;

    const deleteButtonElement = todoElement.querySelector('.todolist-item__del');
    deleteButtonElement.addEventListener('click', () => {
      this.deleteTodo(data.id, todoElement);
    });

    const copyButtonElement = todoElement.querySelector('.todolist-item__copy');
    copyButtonElement.addEventListener('click', () => {
      this.createTodo(data.value);
    });

    return todoElement;
  }
}
