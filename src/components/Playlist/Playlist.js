import React, { useContext } from 'react';
import axios from 'axios';

import SearchContext from '../../contexts/SearchContext';

const Playlist = () => {
  const { search } = useContext(SearchContext);

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          axios.get('https://api.spotify.com/v1/browse/featured-playlists', {
            params: {
              country: 'SE',
              limit: 14,
            },
          }).then((response) => {
            console.log(response);
          });
        }}
      >
        get musics
      </button>
      <pre>{JSON.stringify(search, null, 2)}</pre>
    </div>
  );
};

export default Playlist;
