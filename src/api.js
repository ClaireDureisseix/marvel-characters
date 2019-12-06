import axios from 'axios';
import md5 from 'md5';

const publicKey = `194e82fa7752a06e318949ee25879c5d`;
const privateKey = `f35ebf82567f98d0388fbd8b713236fbd81027ca`;
const ts = 1;
const hash = md5(ts + privateKey + publicKey);

const opts = `characters`; // whatever parameters you want, e.g., `characters/1009215`.
const url = `http://gateway.marvel.com/v1/public/${opts}`; // putting it all together
const KEY = `&ts=${ts}&apikey=${publicKey}&hash=${hash}`;

const api = offset => axios.get(`${url}?offset=${offset}${KEY}`);

export default api;
