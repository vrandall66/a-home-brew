export const setBeers = beers => ({
  type: 'SET_BEERS',
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

export const toggleFavorite = name => ({
  type: 'TOGGLE_FAVORITE',
  name
});

export const setFavorites = favorites => ({
  type: 'SET_FAVORITES',
  favorites
});

export const addFavorite = newFavorite => ({
  type: 'ADD_FAVORITE',
  newFavorite
});

export const resetFavorites = () => ({
  type: 'RESET_FAVORITES'
});
