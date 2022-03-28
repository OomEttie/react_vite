import { client, request, apiHeaders } from './api/_base';

const endpoint = 'posts';

export const jsonplaceholder = client(endpoint, (item) => ({
  ...item,
}));
