import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

export async function getLists() {
  try {
    const res = await axios.get(BASE_URL + '/lists');
    return res.data;
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

export async function putList(payload) {
  try {
    const res = await axios.put(BASE_URL + '/lists', payload);
    return res.data;
  } catch (err) {
    console.error(err);
  }
}

export async function deleteList(id) {
  try {
    const res = await axios.delete(BASE_URL + `/lists/${id}`);
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





export async function getFriends() {
  try {
    const res = await axios.get(BASE_URL + '/friends');
    return res.data;
  } catch (err) {
    console.error(err);
  }
}

export async function getFriendListsByUserId(id) {
  try {
    const res = await axios.get(BASE_URL + `/friends/${id}/lists`);
    return res.data;
  } catch (err) {
    console.error(err);
  }
}

export async function getUserData(steamid) {
  try {
    const res = await axios.get(BASE_URL + `/friends/${steamid}/steamdata`);
    return res.data;
  } catch (err) {
    console.error(err);
  }
}

export function constructImageURL(appid, hash) {
  return `http://media.steampowered.com/steamcommunity/public/images/apps/${appid}/${hash}.jpg`;
}

export function constructStoreURL(appid) {
  return `https://store.steampowered.com/agecheck/app/${appid}/`;
}

const APIService = {
  getLists,
  getListById,
  getFriendListsByUserId,
  getOwnedGames,
  putList,
  deleteList,
  getFriends,
  getUserData,
  constructImageURL,
  constructStoreURL
};

export default APIService;