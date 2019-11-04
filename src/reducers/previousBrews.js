export const previousBrews = (state = [], action) => {
  switch (action.type) {
    case 'SET_PREVIOUS_BREW':
      return [...state, action.beer];
    case 'REMOVE_PREVIOUS_BREW':
      return state.filter(brew => action.beer.id !== brew.id);
    default:
      return state;
  }
};
