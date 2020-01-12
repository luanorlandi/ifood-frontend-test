import axios from 'axios';

const getFilters = async () => {
  const response = await axios.get('http://www.mocky.io/v2/5a25fade2e0000213aa90776');
  return response.data.filters;
};

export default getFilters;
