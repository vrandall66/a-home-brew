export const beers = (state = [], action) => {
  switch (action.type) {
    case 'SET_BEERS':
      return action.beers;
    case 'TOGGLE_FAVORITE':
      return state.map(beer =>
        beer.title === action.name
          ? { ...beer, favorite: !beer.favorite }
          : beer
      );
    default:
      return state;
  }
};
