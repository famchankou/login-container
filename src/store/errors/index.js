import { CLEAR_ERROR_MESSAGE } from './types';

export const clearMessage = () => {
  return async dispatch => {
    dispatch(clearMessageCreator());
  };
};

const clearMessageCreator = () => ({
  type: CLEAR_ERROR_MESSAGE,
});
