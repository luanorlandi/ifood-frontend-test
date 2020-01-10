import React, {
  useContext, useEffect, useState, useRef, useCallback,
} from 'react';

import SearchContext from '../../contexts/SearchContext';
import getFeaturedPlaylists from '../../api/getFeaturedPlaylists';
import PlaylistCard from './PlaylistCard';
import constants from '../../constants';
import './Playlists.scss';

const { REFRESH_INTERVAL } = constants;

const Playlists = () => {
  const { search } = useContext(SearchContext);
  const [playlists, setPlaylists] = useState(null);
  const intervalId = useRef(null);

  const restartInterval = useCallback(() => {
    if (intervalId.current) {
      clearInterval(intervalId.current);
    }

    intervalId.current = setInterval(() => {
      getFeaturedPlaylists(search);
    }, REFRESH_INTERVAL);
  }, [search, intervalId]);

  useEffect(() => {
    restartInterval();

    return () => {
      clearInterval(intervalId.current);
    };
  }, [intervalId, restartInterval]);

  useEffect(() => {
    if (search !== null) {
      getFeaturedPlaylists(search)
        .then((newPlaylists) => setPlaylists(newPlaylists));
      restartInterval();
    }
  }, [search, restartInterval]);

  return (
    <div className="playlists">
      <div className="playlists__cards">
        {playlists && playlists.map((playlist) => (
          <PlaylistCard key={playlist.id} playlist={playlist} />
        ))}
      </div>
    </div>
  );
};

export default Playlists;
