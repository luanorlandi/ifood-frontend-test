
const clientId = process.env.REACT_APP_CLIENT_ID;
const redirectUri = process.env.NODE_ENV === 'development'
  ? process.env.REACT_APP_REDIRECT_URL_DEV
  : process.env.REACT_APP_REDIRECT_URL;

export default {
  REFRESH_INTERVAL: 30000,
  DESKTOP_DEVICE_BREAKPOINT: 1024,
  CLIENT_ID: clientId,
  REDIRECT_URL: redirectUri,
};
