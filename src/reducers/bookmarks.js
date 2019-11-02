export const bookmarks = (state = [], action) => {
  switch (action.type) {
    case 'SET_BOOKMARK':
      let newState = [...state, action.beer]
      return newState;
    case 'TOGGLE_BOOKMARK':
      return state.map(beer =>
        beer.name === action.beer.name
          ? { ...beer, bookmarked: !beer.bookmarked }
          : beer
      );
    default:
      return state;
  }
};
