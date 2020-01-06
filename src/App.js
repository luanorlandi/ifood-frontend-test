import React from 'react';
import axios from 'axios';
import queryString from 'query-string';

import Navbar from './components/Navbar/Navbar';
import './styles/index.scss';

const client_id = 'd7bbdae96bfa431fba63fb1f4b3cf9b4';
const redirect_uri = process.env.REACT_APP_REDIRECT_URL;
// TODO handle auth error https://example.com/callback?error=access_denied&state=STATE

const App = () => (
  <div className="App">
    <header className="App-header">
      <a href={`https://accounts.spotify.com/authorize?response_type=token&client_id=${client_id}&redirect_uri=${encodeURIComponent(redirect_uri)}`}>
        Login with Spotify
      </a>
      <button
        type="button"
        className="button"
        onClick={() => {
          console.log(window.location.search);
          console.log(queryString.parse(window.location.hash));
        }}
      >
        test
      </button>
      <button
        type="button"
        onClick={() => {
          const { access_token, token_type } = queryString.parse(window.location.hash);
          console.log(access_token);
          console.log(token_type);
          axios.get('https://api.spotify.com/v1/browse/featured-playlists', {
            params: {
              country: 'SE',
              limit: 14,
            },
            headers: {
              Authorization: `${token_type} ${access_token}`,
            },
          }).then((response) => {
            console.log(response);
          });
        }}
      >
        get musics
      </button>
      <Navbar />
    </header>
  </div>
);

export default App;
