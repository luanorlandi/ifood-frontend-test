import React, { useContext } from 'react';

import PlaylistsContext from '../../contexts/PlaylistsContext';
import PlaylistCard from './PlaylistCard';
import './Playlists.scss';

const Playlists = () => {
  const { playlists } = useContext(PlaylistsContext);

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
