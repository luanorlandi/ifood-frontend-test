import queryString from 'query-string';
import axios from 'axios';

export const getToken = () => {
  let token = localStorage.getItem('token');
  if (!token) {
    token = queryString.parse(window.location.hash).access_token;
    // clear token in the browser address url
    window.history.pushState(null, '', window.location.href.split('#')[0]);
  }

  return token;
};

export const setToken = (token) => {
  localStorage.setItem('token', token);
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  localStorage.removeItem('token');
};
