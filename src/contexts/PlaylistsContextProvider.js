import React, { useState } from 'react';
import PropTypes from 'prop-types';

import PlaylistsContext from './PlaylistsContext';

const PlaylistsContextProvider = ({ children }) => {
  const [playlists, setPlaylists] = useState([]);

  return (
    <PlaylistsContext.Provider value={{ playlists, setPlaylists }}>
      {children}
    </PlaylistsContext.Provider>
  );
};

PlaylistsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlaylistsContextProvider;
