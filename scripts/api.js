const URL = 'http://localhost:3000/todos';

export function getTodos() {
  return fetch(URL).then(response => {
    if (!response.ok) {
      return Promise.reject(`Ошибка: ${response.status}`);
    }

    return response.json();
  });
}

export function createTodo(value) {
  return fetch(URL, {
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

export function deleteTodos(id) {
  return fetch(`${URL}/${id}`, {
    method: 'DELETE',
  }).then(response => {
    if (!response.ok) {
      return Promise.reject(`Ошибка: ${response.status}`);
    }

    return response.json();
  });
}
