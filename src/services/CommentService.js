const URL = "https://jsonplaceholder.typicode.com";

export const getCommentsByRange = async (start, limit) => {
  try {
    const rawData = await fetch(
      `${URL}/comments?_start=${start}&_limit=${limit}`
    );
    const data = await rawData.json();
    return data;
  } catch (error) {
    throw new Error(error.error);
  }
};
