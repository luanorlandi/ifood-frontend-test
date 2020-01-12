import React, { useState, useEffect } from 'react';

import PlaylistsContextProvider from './contexts/PlaylistsContextProvider';
import NavbarFilter from './components/NavbarFilter/NavbarFilter';
import Playlists from './components/Playlists/Playlists';
import { getToken, setToken } from './api/token';
import './styles/index.scss';
import './App.scss';

const clientId = process.env.REACT_APP_CLIENT_ID;
const redirectUri = process.env.REACT_APP_REDIRECT_URL;
// TODO handle auth error https://example.com/callback?error=access_denied&state=STATE

const App = () => {
  const [isLoadingToken, setIsLoadingToken] = useState(true);
  const [isLoggedIn, setisLoggedIn] = useState(false);

  useEffect(() => {
    const token = getToken();

    if (token) {
      setToken(token);
      setisLoggedIn(true);
    }
    setIsLoadingToken(false);
  }, []);

  if (isLoadingToken) {
    return null;
  }

  return (
    <PlaylistsContextProvider>
      <div className="app">
        {isLoggedIn && (
          <>
            <NavbarFilter />
            <Playlists />
          </>
        )}
        {!isLoggedIn && (
          <div className="app__login">
            <h1 className="app__login-title">Spotifood</h1>
            <h2 className="app__login-description">Pesquise pelas suas playlists preferidas</h2>
            <a className="button is-primary" href={`https://accounts.spotify.com/authorize?response_type=token&client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}`}>
              Fazer login com Spotify
            </a>
          </div>
        )}
      </div>
    </PlaylistsContextProvider>
  );
};

export default App;
