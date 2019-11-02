export const beers = (state = [], action) => {
  switch (action.type) {
    case 'SET_BEERS':
      return action.beers;
    // case 'ADD_PROPERTIES':
    //   return (state = action.beers.map(beer => ({
    //     ...beer,
    //     bookmarked: false,
    //     current: false,
    //     previous: false
    //   })));
    default:
      return state;
  }
};
