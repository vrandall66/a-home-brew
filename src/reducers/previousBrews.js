export const previousBrews = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PREVIOUS_BREW':
      return [...state, action.beer];
    case 'TOGGLE_PREVIOUS_BREW':
      return state.map(beer =>
        beer.id === action.beer.id
          ? { ...beer, previous: !beer.previous }
          : beer
      );
    case 'REMOVE_PREVIOUS_BREW':
      return state.filter(brew => action.beer.id !== brew.id);
    default:
      return state;
  }
};
