import { client, request, apiHeaders } from "./_base";

const endpoint = "posts";

export const jsonplaceholder = client(endpoint, (item) => ({
  ...item,
}));
