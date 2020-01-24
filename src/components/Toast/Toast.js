import React from 'react';
import PropTypes from 'prop-types';

import constants from '../../constants';
import './Toast.scss';

const { CLIENT_ID, REDIRECT_URL } = constants;

const Toast = ({ sessionExpired, errorMessage }) => {
  if (sessionExpired) {
    return (
      <div className="toast toast--is-center">
        <div className="toast__message">Sua sessão expirou</div>
        <div>
          <a
            className="button is-primary is-small"
            href={`https://accounts.spotify.com/authorize?response_type=token&client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URL)}`}
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
