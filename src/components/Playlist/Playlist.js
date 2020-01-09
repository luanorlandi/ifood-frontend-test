import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import SearchContext from '../../contexts/SearchContext';

const Playlist = () => {
  const { search } = useContext(SearchContext);
  const [result, setResult] = useState({});

  useEffect(() => {
    if (search !== null) {
      axios.get('https://api.spotify.com/v1/browse/featured-playlists', {
        params: search,
      }).then((response) => {
        setResult(response.data);
      });
    }
  }, [search]);

  return (
    <div>
      <pre>{JSON.stringify(result, null, 2)}</pre>
    </div>
  );
};

export default Playlist;
