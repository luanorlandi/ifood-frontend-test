import axios from 'axios';

const getFeaturedPlaylists = async (search) => {
  const response = axios.get('https://api.spotify.com/v1/browse/featured-playlists', {
    params: search,
  });

  return response.data;
};

export default getFeaturedPlaylists;
