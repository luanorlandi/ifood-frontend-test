import { toast } from 'react-toastify';

import Toast from '../components/Toast/Toast';
import { clearToken } from './token';

const handleResponseError = (error) => {
  if (error.response) {
    if (error.response.status === 401) {
      toast(Toast({ sessionExpired: true }));
      clearToken();
    } else {
      const { status, message } = error.response.data.error;
      const errorMessage = `${status}: ${message}`;
      toast(Toast({ errorMessage }));
    }
  }

  return Promise.reject(error);
};

export default handleResponseError;
