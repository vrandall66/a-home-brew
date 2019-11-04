import * as actions from './index';

describe('actions', () => {
  it('should have a type of SET_BEERS', () => {
    const beers = [{}, {}, {}];

    const result = actions.setBeers(beers);

    expect(result).toEqual({ beers: [{}, {}, {}], type: 'SET_BEERS' });
  });

  it('should have a type of SET_SEARCH RESULTS', () => {
    const beers = [{}, {}, {}];

    const result = actions.setSearchResults(beers);

    expect(result).toEqual({ beers: [{}, {}, {}], type: 'SET_SEARCH_RESULTS' });
  });

  it('should have a type of IS_LOADING', () => {
    const loading = true;

    const result = actions.setLoading(loading);

    expect(result).toEqual({ bool: true, type: 'IS_LOADING' });
  });

  it('should have a type of HAS_ERROR', () => {
    const error = 'Whoops';

    const result = actions.setError(error);

    expect(result).toEqual({ error: 'Whoops', type: 'HAS_ERROR' });
  });

  it('should have a type of SET_BOOKMARK', () => {
    const id = 1;
    const result = actions.setBookmark(id);

    expect(result).toEqual({ beer: 1, type: 'SET_BOOKMARK' });
  });

  it('should have a type of REMOVE_BOOKMARK', () => {
    const id = 1;

    const result = actions.removeBookmark(id);

    expect(result).toEqual({ beer: 1, type: 'REMOVE_BOOKMARK' });
  });

  it('should have a type of SET_PREVIOUS_BREW', () => {
    const id = 1;

    const result = actions.setPreviousBrew(id);

    expect(result).toEqual({ beer: 1, type: 'SET_PREVIOUS_BREW' });
  });

  it('should have a type of REMOVE_PREVIOUS_BREW', () => {
    const id = 1;

    const result = actions.removePreviousBrew(id);

    expect(result).toEqual({ beer: 1, type: 'REMOVE_PREVIOUS_BREW' });
  });
});
