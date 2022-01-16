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

export async function getListById(id) {
  try {
    const res = await axios.get(BASE_URL + `/lists/${id}`);
    return res.data;
  } catch (err) {
    console.error(err);
  }
}

export async function getOwnedGames() {
  try {
    const res = await axios.get(BASE_URL + '/games');
    return res.data;
  } catch (err) {
    console.error(err);
  }
}

export async function putList(payload) {
  try {
    const res = await axios.put(BASE_URL + '/lists', payload);
    return res.data;
  } catch (err) {
    console.error(err);
  }
}

export function constructImageURL(appid, hash) {
  return `http://media.steampowered.com/steamcommunity/public/images/apps/${appid}/${hash}.jpg`;
}

const APIService = {
  getLists,
  getListById,
  getOwnedGames,
  putList,
  constructImageURL
};

export default APIService;