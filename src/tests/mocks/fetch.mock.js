export const createFetchResponse = (data) => {
  return { json: () => new Promise((resolve) => resolve(data)) };
};
