export class Api {
  constructor(url) {
    this.url = url;
  }

  fetchTodos() {
    return fetch(this.url).then(response => {
      if (!response.ok) {
        return Promise.reject(`Ошибка: ${response.status}`);
      }

      return response.json();
    });
  }

  createTodo(value) {
    return fetch(this.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ value }),
    }).then(response => {
      if (!response.ok) {
        return Promise.reject(`Ошибка: ${response.status}`);
      }

      return response.json();
    });
  }

  deleteTodos(id) {
    return fetch(`${this.url}/${id}`, {
      method: 'DELETE',
    }).then(response => {
      if (!response.ok) {
        return Promise.reject(`Ошибка: ${response.status}`);
      }

      return response.json();
    });
  }
}
