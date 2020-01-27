import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import PlaylistsContextProvider from './contexts/PlaylistsContextProvider';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import { getToken, setToken } from './api/token';
import handleResponseError from './api/handleResponseError';
import './styles/index.scss';
import './App.scss';

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
          <Home />
        )}
        {!isLoggedIn && (
          <Login />
        )}
      </div>
    </PlaylistsContextProvider>
  );
};

export default App;
