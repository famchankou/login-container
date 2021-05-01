import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import loginReducer from './auth/reducer';
import errorReducer from './errors/reducer';
import history from './history';

const reducers = {
  router: connectRouter(history),
  auth: loginReducer,
  errors: errorReducer,
};

export default combineReducers(reducers);
