import axios from 'axios';

const publicKey = `194e82fa7752a06e318949ee25879c5d`;
const ts = 1;
const hash = '52e8b131792ad4542ccc9adab79033f9';


const opts = `characters`;
const url = `http://gateway.marvel.com/v1/public/${opts}`;
const KEY = `&ts=${ts}&apikey=${publicKey}&hash=${hash}`;

const api = offset => axios.get(`${url}?offset=${offset * 20}${KEY}`);

export default api;
