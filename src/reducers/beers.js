export const beers = (state = [], action) => {
  switch (action.type) {
    case 'SET_BEERS':
      return action.beers;
    default:
      return state;
  }
};
