import { BASE_URL } from './constant';

export const getStories = async (type) => {
  const response = await fetch(`${BASE_URL}/${type}.json`);
  const data = response.json();
  return data;
}

export const getStory = async (id) => {
  const response = await fetch(`${BASE_URL}/item/${id}.json`);
  const data = response.json();
  return data;
}