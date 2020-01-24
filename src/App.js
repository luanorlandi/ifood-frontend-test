import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import PlaylistsContextProvider from './contexts/PlaylistsContextProvider';
import NavbarFilter from './components/NavbarFilter/NavbarFilter';
import Playlists from './components/Playlists/Playlists';
import { getToken, setToken } from './api/token';
import handleResponseError from './api/handleResponseError';
import constants from './constants';
import './styles/index.scss';
import './App.scss';

const { CLIENT_ID, REDIRECT_URL } = constants;

axios.interceptors.response.use(null, handleResponseError);

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
      <ToastContainer
        position="top-left"
        autoClose={false}
        closeOnClick={false}
        pauseOnVisibilityChange
      />
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
            <a
              className="button is-primary"
              href={`https://accounts.spotify.com/authorize?response_type=token&client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URL)}`}
            >
              Fazer login com Spotify
            </a>
          </div>
        )}
      </div>
    </PlaylistsContextProvider>
  );
};

export default App;
