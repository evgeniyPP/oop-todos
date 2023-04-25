export class API {
  url;

  constructor(url) {
    this.url = url;
  }

  async getTasks() {
    const response = await fetch(this.url);

    if (!response.ok) {
      return Promise.reject(`Ошибка: ${response.status}`);
    }

    return response.json();
  }

  async createTask(value) {
    const response = await fetch(this.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ value }),
    });

    if (!response.ok) {
      return Promise.reject(`Ошибка: ${response.status}`);
    }

    return response.json();
  }

  async deleteTask(id) {
    const response = await fetch(`${this.url}/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      return Promise.reject(`Ошибка: ${response.status}`);
    }

    return response.json();
  }
}
