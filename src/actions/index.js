export const setBeers = beers => ({
  type: 'SET_BEERS',
  beers
});

export const setSearchResults = beers => ({
  type: 'SET_SEARCH_RESULTS',
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

export const setPreviousBrew = beer => ({
  type: 'SET_PREVIOUS_BREW',
  beer
});

export const removePreviousBrew = beer => ({
  type: 'REMOVE_PREVIOUS_BREW',
  beer
});
