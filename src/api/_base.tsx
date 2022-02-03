export const config = {
  DEBUG: "api:*",
  API_ADDRESS: `${(import.meta as any).env.VITE_API_PATH}`,
};

export const apiHeaders = (
  content: { length: number } = { length: 0 },
  options: {} = {}
) =>
  new Headers({
    Accept: "application/json",
    "Content-Length": content.length + "",
    "Content-Type": "application/json",
    "X-csrf-validation": "-",
    ...options,
  });

export const request = (path: string, options: RequestInit = {}) => {
  console.log("request", config.API_ADDRESS, path);
  return fetch(`${config.API_ADDRESS}/${path}`, {
    headers: apiHeaders((options.body as any) || ""),
    ...options,
    credentials: "include",
  });
};

export const all =
  (endpoint: String, transform = (item: any) => item) =>
  () =>
    request(`${endpoint}`, {
      headers: apiHeaders(),
    })
      .then(async (result) => {
        if (result.status == 500) {
          const resp = await result.json();
          throw resp;
        }
        return result.json();
      })
      .then(({ data }) => (data ? data.map((item: any) => item) : []));

export const single =
  (endpoint: String, transform = (item: any) => item) =>
  (id: any) =>
    request(`${endpoint}/${id}`, {
      method: "GET",
    }).then(async (result) => {
      if (result.status == 500) {
        const resp = await result.json();
        throw resp;
      }
      return await result.json();
    });

export const create =
  (endpoint: String, transform = (item: any) => item) =>
  (item: any) => {
    const content = JSON.stringify(item);
    return request(`${endpoint}`, {
      method: "POST",
      headers: apiHeaders(content),
      body: content,
    })
      .then(async (result) => {
        if (result.status == 500) {
          const resp = await result.json();
          throw resp;
        }
        return result.json();
      })
      .then(({ data }) => data);
  };

export const update =
  (endpoint: String, transform = (item: any) => item) =>
  (id: any, item: any) => {
    const content = JSON.stringify(item);
    return request(`${endpoint}/${id}`, {
      method: "PUT",
      headers: apiHeaders(content),
      body: content,
    })
      .then(async (result) => {
        if (result.status == 500) {
          const resp = await result.json();
          throw resp;
        }
        return result.json();
      })
      .then(({ data }) => data);
  };

export const remove =
  (endpoint: String, transform = (item: any) => item) =>
  (id: any) => {
    return request(`${endpoint}/${id}`, {
      method: "DELETE",
    }).then(async (result) => {
      if (result.status == 500) {
        const resp = await result.json();
        throw resp;
      }
      return result.json();
    });
  };

export const client = (endpoint: String, transform = (item: any) => item) => ({
  all: all(endpoint, transform),
  single: single(endpoint, transform),
  update: update(endpoint, transform),
  create: create(endpoint, transform),
  remove: remove(endpoint, transform),
});

export const whoami = async () => {
  const response = await request("whoami", {
    method: "GET",
  });
  return response.json();
};
