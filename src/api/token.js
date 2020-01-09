import queryString from 'query-string';
import axios from 'axios';

export const getToken = () => {
  let token = localStorage.getItem('token');
  if (!token) {
    token = queryString.parse(window.location.hash).access_token;
    // TODO limpar barra de endereço
  }

  return token;
};

export const setToken = (token) => {
  localStorage.setItem('token', token);
  axios.defaults.headers.common.Authorization = `Bearer ${token}`; // TODO handle other types of token
  // TODO handle token expiration
};
