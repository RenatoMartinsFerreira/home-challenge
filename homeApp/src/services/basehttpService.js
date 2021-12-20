import axios from 'axios';

const header = {
  headers: {
    'Content-type': 'application.json',
  },
};

export const get = url => {
  axios.get(url, header);
};
