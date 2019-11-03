export const currentBrews = (state = [], action) => {
  switch (action.type) {
    case 'SET_CURRENT_BREW':
      return [...state, action.beer];
    case 'REMOVE_CURRENT_BREW':
      return state.filter(brew => action.beer.id !== brew.id);
    default:
      return state;
  }
};
