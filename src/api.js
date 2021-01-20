import { BASE_URL } from './constant';

export const getStories = async (type) => {
  const response = await fetch(`${BASE_URL}/${type}.json`);
  const data = response.json();
  return data;
}