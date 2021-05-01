const INITIAL_STATE = {};

const errorReducer = (state = INITIAL_STATE, { type, payload }) => {
  const { page, error = '' } = payload || {};
  const matches = /(.*)_(FAILURE)/.exec(type);
  const clearError = 'CLEAR_ERROR_MESSAGE';
  if (type === clearError) return INITIAL_STATE;

  if (!matches) return state;

  if (matches[2] === 'FAILURE') {
    return {
      ...state,
      [page]: error,
    };
  }
  return state;
};

export default errorReducer;
