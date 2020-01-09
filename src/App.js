import React, { useState, useEffect } from 'react';

import SearchContextProvider from './contexts/SearchContextProvider';
import NavbarFilter from './components/NavbarFilter/NavbarFilter';
import Playlists from './components/Playlists/Playlists';
import { getToken, setToken } from './api/token';
import './styles/index.scss';

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

  if (!isLoggedIn) {
    return (
      <a href={`https://accounts.spotify.com/authorize?response_type=token&client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}`}>
        Login with Spotify
      </a>
    );
  }

  return (
    <SearchContextProvider>
      <div style={{ display: 'flex' }}>
        {/* TODO melhorar este estilo inline */}
        <NavbarFilter />
        <div style={{ width: '100%' }}>
          {/* TODO melhorar este estilo inline */}
          {isLoggedIn && (
            <Playlists />
          )}
          {!isLoggedIn && (
            <a href={`https://accounts.spotify.com/authorize?response_type=token&client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}`}>
              Login with Spotify
            </a>
          )}
        </div>
      </div>
    </SearchContextProvider>
  );
};

export default App;
