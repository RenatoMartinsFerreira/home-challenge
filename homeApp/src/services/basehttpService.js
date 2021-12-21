import axios from 'axios';

const headers = {
  Accept: 'application/vnd.github.v3+json',
};

export const get = async url => {
  axios.get(url, headers);
};
