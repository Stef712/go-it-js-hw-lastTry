import axios from 'axios';

const BASE_URL = 'https://api.thecatapi.com/v1';
const API_KEY =
  'live_79RAfBv9yvxOiFjci7Tdpey7dQfoDO0R8gIEp9W7NfG4J1wyZBlQE0I02YK2S7B8';

export async function fetchBreeds(params) {
  return (await axios.get(`${BASE_URL}/breeds?api_key=${API_KEY}`)).data;
}

export async function fetchCatByBreed(breedId) {
  return (
    await axios.get(
      `${BASE_URL}/images/search?api_key=${API_KEY}&breed_id=${breedId}`
    )
  ).data;
}
