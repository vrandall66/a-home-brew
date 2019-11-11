export const hasError = (state = false, action) => {
  switch (action.type) {
    case 'HAS_ERROR':
      return action.bool;
    default:
      return state;
  }
};
