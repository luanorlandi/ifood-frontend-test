import axios from 'axios';

const getFeaturedPlaylists = async (search) => {
  const response = await axios.get('https://api.spotify.com/v1/browse/featured-playlists', {
    params: search,
  });

  return response.data.playlists.items;
};

export default getFeaturedPlaylists;
