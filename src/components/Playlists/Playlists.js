import React, { useContext, useEffect, useState } from 'react';

import SearchContext from '../../contexts/SearchContext';
import getFeaturedPlaylists from '../../api/getFeaturedPlaylists';
import PlaylistCard from './PlaylistCard';
import './Playlists.scss';

const Playlists = () => {
  const { search } = useContext(SearchContext);
  const [playlists, setPlaylists] = useState(null);

  useEffect(() => {
    // TODO refresh a cada 30 segundos
    if (search !== null) {
      getFeaturedPlaylists(search)
        .then((newPlaylists) => setPlaylists(newPlaylists));
    }
  }, [search]);

  return (
    <div className="playlists">
      {playlists && playlists.map((playlist) => (
        <PlaylistCard playlist={playlist} />
      ))}
    </div>
  );
};

export default Playlists;
