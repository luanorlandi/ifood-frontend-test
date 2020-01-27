import React, { useContext, useEffect } from 'react';

import PlaylistsContext from '../../contexts/PlaylistsContext';
import NavbarFilter from '../../components/NavbarFilter/NavbarFilter';
import Playlists from '../../components/Playlists/Playlists';
import getFeaturedPlaylists from '../../api/getFeaturedPlaylists';

const Home = () => {
  const { setPlaylists } = useContext(PlaylistsContext);

  useEffect(() => {
    // load some playlists for the first render
    getFeaturedPlaylists({})
      .then((newPlaylists) => setPlaylists(newPlaylists));
  }, [setPlaylists]);

  return (
    <>
      <NavbarFilter />
      <Playlists />
    </>
  );
};

export default Home;
