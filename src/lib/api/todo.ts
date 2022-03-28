export const getAll = () => {
  return fetch('https://jsonplaceholder.typicode.com/todos').then((response) => response.json());
};
