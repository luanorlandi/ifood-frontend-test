import axios from 'axios';

const parseEmptyValues = (values) => {
  const entries = Object.entries(values);

  return entries.reduce((accumulator, [key, value]) => {
    if (value === '') {
      return accumulator;
    }

    return { ...accumulator, [key]: value };
  }, {});
};

const getFeaturedPlaylists = async (values) => {
  // all fields are optional, remove empty values for the search
  const parsedValues = parseEmptyValues(values);
  const response = await axios.get('https://api.spotify.com/v1/browse/featured-playlists', {
    params: parsedValues,
  });

  return response.data.playlists.items;
};

export default getFeaturedPlaylists;
