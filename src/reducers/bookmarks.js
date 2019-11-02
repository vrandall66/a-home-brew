export const bookmarks = (state = [], action) => {
  switch (action.type) {
    case 'SET_BOOKMARK':
      return [...state, action.beer];
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
