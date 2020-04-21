import axios from 'axios';

axios.defaults.headers.get['Content-Type'] = 'application-json';

axios.defaults.baseURL = 'https://appco-statistic.herokuapp.com';

export const getUsersPaginateFromServer = (page, limit) =>
  axios(`/users?page=${page}&limit=${limit}`);

export const example = () => {};
