const baseUrl: string = `${import.meta.env.VITE_API}`;
let obtainedData: [];

export const fetchApi = async () => {
  const response = await fetch(baseUrl);
  obtainedData = await response.json();
  return obtainedData;
};
