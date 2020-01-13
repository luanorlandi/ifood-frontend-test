import React from 'react';
import PropTypes from 'prop-types';

import './Toast.scss';

const clientId = process.env.REACT_APP_CLIENT_ID;
const redirectUri = process.env.NODE_ENV === 'development'
  ? process.env.REACT_APP_REDIRECT_URL_DEV
  : process.env.REACT_APP_REDIRECT_URL;

const Toast = ({ sessionExpired, errorMessage }) => {
  if (sessionExpired) {
    return (
      <div className="toast toast--is-center">
        <div className="toast__message">Sua sessão expirou</div>
        <div>
          <a
            className="button is-primary is-small"
            href={`https://accounts.spotify.com/authorize?response_type=token&client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}`}
          >
            Fazer login novamente
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="toast">
      <div className="toast__message">Falha no servidor:</div>
      <pre>{errorMessage}</pre>
    </div>
  );
};

Toast.propTypes = {
  sessionExpired: PropTypes.bool,
  errorMessage: PropTypes.string,
};

Toast.defaultProps = {
  sessionExpired: false,
  errorMessage: '',
};

export default Toast;
