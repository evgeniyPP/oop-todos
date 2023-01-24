export class Api {
  url;
  headers;

  constructor({ url, headers }) {
    this.url = url;
    this.headers = headers;
  }

  async getTasks() {
    try {
      const response = await fetch(this.url, {
        headers: this.headers,
      });

      return this.#parseResponse(response);
    } catch (error) {
      Promise.reject(error);
    }
  }

  async createTask(name) {
    try {
      const response = fetch(this.url, {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify({ name }),
      });

      return this.#parseResponse(response);
    } catch (error) {
      Promise.reject(new Error(msg));
    }
  }

  async deleteTask(id) {
    try {
      const response = fetch(`${this.url}/${id}`, {
        method: 'DELETE',
        headers: this.headers,
      });

      return this.#parseResponse(response);
    } catch (error) {
      Promise.reject(new Error(msg));
    }
  }

  #parseResponse(res) {
    if (!res.ok) {
      return Promise.reject(new Error(`Произошла ошибка со статус-кодом ${res.status}`));
    }

    return res.json();
  }
}


