export const searchResults = (state = [], action) => {
  switch (action.type) {
    case 'SET_SEARCH_RESULTS':
      return action.beers;
    default:
      return state;
  }
};
