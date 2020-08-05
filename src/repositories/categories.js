import { URL_API } from '../config';

const URL_CATEGORIES = `${URL_API}/categories`;

async function getAllWithVideos() {
  const response = await fetch(`${URL_CATEGORIES}/?_embed=videos`);
  if (response.ok) {
    return response.json();
  }
  throw new Error('Something went wrong when fetching data from the server');
}

async function getAll() {
  const response = await fetch(URL_CATEGORIES);
  if (response.ok) {
    return response.json();
  }
  throw new Error('Something went wrong when fetching data from the server');
}

async function create(category) {
  const response = await fetch(URL_CATEGORIES, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(category),
  });

  if (response.ok) {
    return response.json();
  }
  throw new Error('Something went wrong when getting data from the server');
}

export default { getAllWithVideos, getAll, create };
