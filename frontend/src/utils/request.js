export const request = (url, method, data) =>
  fetch('/api' + url, {
    headers: {
      'content-type': 'application/json',
    },
    method: method || 'GET',
    body: data ? JSON.stringify(data) : undefined,
  }).then((res) => res.json());
