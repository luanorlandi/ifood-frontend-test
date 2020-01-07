import React from 'react';
import axios from 'axios';
import queryString from 'query-string';

import NavbarFilter from './components/NavbarFilter/NavbarFilter';
import './styles/index.scss';

const clientId = process.env.REACT_APP_CLIENT_ID;
const redirectUri = process.env.REACT_APP_REDIRECT_URL;
// TODO handle auth error https://example.com/callback?error=access_denied&state=STATE

const App = () => (
  <div style={{ display: 'flex' }}>
    {/* TODO melhorar este estilo inline */}
    <NavbarFilter />
    <div>
      <a href={`https://accounts.spotify.com/authorize?response_type=token&client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}`}>
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
    </div>
  </div>
);

export default App;
