import axios from 'axios';

const getFilters = async () => {
  // TODO fazer interceptors para pegar o data e lidar com o token (na outra request só)
  const response = await axios.get('http://www.mocky.io/v2/5a25fade2e0000213aa90776');
  return response.data.filters;
};

export default getFilters;
