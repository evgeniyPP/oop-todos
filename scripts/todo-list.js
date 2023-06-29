export class TodoList {
  constructor(listSelector) {
    this.listElement = document.querySelector(listSelector);
  }

  addItem(element) {
    this.listElement.append(element);
  }
}
