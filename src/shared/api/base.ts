import axios from "axios";


export const beerApi = axios.create({
  baseURL: 'https://api.punkapi.com/v2',
});