import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

export async function getLists() {
  try {
    const res = await axios.get(BASE_URL + '/lists');
    return { data: res.data };
  } catch (err) {
    console.error(err);
  }
}