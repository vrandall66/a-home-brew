export const bookmarks = (state = [], action) => {
  switch (action.type) {
    case 'SET_BOOKMARK':
      return [...state, action.beer];
    case 'REMOVE_BOOKMARK':
      return state.filter(brew => action.beer !== brew);
    default:
      return state;
  }
};
