import {get} from './basehttpService';

export const getTopUsers = async () =>
  get('https://api.github.com/users?page=0&per_page=5');
