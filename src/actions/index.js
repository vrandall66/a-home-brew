export const setBeers = beers => ({
  type: 'SET_BEERS',
  beers
});

export const addProperties = beers => ({
  type: 'ADD_PROPERTIES',
  beers
});

export const setLoading = bool => ({
  type: 'IS_LOADING',
  bool
});

export const setError = error => ({
  type: 'HAS_ERROR',
  error
});

export const setBookmark = beer => ({
  type: 'SET_BOOKMARK',
  beer
});

export const removeBookmark = beer => ({
  type: 'REMOVE_BOOKMARK',
  beer
});

// export const addCurrentlyBrewing = beer => ({
//   type: 'ADD_CURRENTLY_BREWING',
//   beer
// });

// export const addPreviousBrew = beer => ({
//   type: 'ADD_PREVIOUS_BREW',
//   beer
// });