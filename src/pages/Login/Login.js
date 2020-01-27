import React from 'react';

import constants from '../../constants';

const { CLIENT_ID, REDIRECT_URL } = constants;

const Login = () => (
  <>
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
  </>
);

export default Login;
