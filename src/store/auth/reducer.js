import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from './types';

const initialState = {
  user: {},
  isAuth: false,
  isRequesting: false,
  error: null,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isRequesting: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isRequesting: false,
        isAuth: true,
        user: action.payload,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isRequesting: false,
        error: action.payload.error,
      };
    case LOGOUT:
      return {
        user: {},
        isAuth: false,
        error: null,
      };
    default:
      return state;
  }
};

export default loginReducer;
