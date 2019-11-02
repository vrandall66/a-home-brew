export const bookmarks = (state = [], action) => {
  switch (action.type) {
    case 'SET_BOOKMARK':
      return [...state, action.beer];
    case 'TOGGLE_BOOKMARK':
      return state.map(beer =>
        beer.id === action.beer.id
          ? { ...beer, bookmarked: !beer.bookmarked }
          : beer
      );
    case 'REMOVE_BOOKMARK':
      return state.filter(brew => action.beer.id !== brew.id);
    default:
      return state;
  }
};
