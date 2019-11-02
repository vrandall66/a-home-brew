export const previousBrews = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PREVIOUS_BREW':
      return [...state, action.beer];
    default:
      return state;
  }
};
