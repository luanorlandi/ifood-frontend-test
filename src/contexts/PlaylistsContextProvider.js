import React, { useState } from 'react';
import PropTypes from 'prop-types';

import PlaylistsContext from './PlaylistsContext';

const PlaylistsContextProvider = ({ children, initialPlaylists }) => {
  const [playlists, setPlaylists] = useState(initialPlaylists);

  return (
    <PlaylistsContext.Provider value={{ playlists, setPlaylists }}>
      {children}
    </PlaylistsContext.Provider>
  );
};

PlaylistsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
  initialPlaylists: PropTypes.array,
};

PlaylistsContextProvider.defaultProps = {
  initialPlaylists: null,
};

export default PlaylistsContextProvider;
