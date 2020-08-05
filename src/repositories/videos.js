import { URL_API } from '../config';

const URL_VIDEOS = `${URL_API}/videos`;

async function getAll() {
  const response = await fetch(URL_VIDEOS);
  if (response.ok) {
    return response.json();
  }
  throw new Error('Something went wrong when fetching data from the server');
}

async function create(video) {
  const response = await fetch(URL_VIDEOS, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(video),
  });

  if (response.ok) {
    return response.json();
  }
  throw new Error('Something went wrong when getting data from the server');
}

export default { getAll, create };
