const listElement = document.querySelector('.todolist');

export function addItem(element) {
  listElement.append(element);
}
