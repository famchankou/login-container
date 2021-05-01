import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from './types';
import { push } from 'connected-react-router';
import { setAuth, deleteAuth, generateRandomStr } from '../../services';

const BASIC_TIMEOUT = 600;
export const loginFlow = ({ email }) => {
  return async dispatch => {
    dispatch(loginRequest());

    try {
      const expirationTime = 3600000; // 1 hour
      const user = {
        userId: generateRandomStr(16),
        loggedInUntil: Date.now() + expirationTime,
        email,
      };

      setAuth(user);
      setTimeout(() => {
        dispatch(loginSuccess(user));
        dispatch(push('/dashboard'));
      }, BASIC_TIMEOUT);
    } catch (error) {
      dispatch(loginFailure(error, 'login'));
    }
  };
};

export const unauthorize = () => {
  return async dispatch => {
    setTimeout(() => {
      deleteAuth();
      dispatch(logoutSuccess());
      dispatch(push('/login'));
    }, BASIC_TIMEOUT);
  };
};

const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

const loginSuccess = user => ({
  type: LOGIN_SUCCESS,
  payload: {
    ...user,
  },
});

const loginFailure = (error, page) => ({
  type: LOGIN_FAILURE,
  payload: {
    error: error.message,
    page,
  },
});

const logoutSuccess = () => ({
  type: LOGOUT,
});
