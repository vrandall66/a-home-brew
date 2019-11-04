import { searchResults } from './searchResults';

describe('searchResults', () => {
  it('should return the initial state', () => {
    const expected = [];

    const result = searchResults(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should output the correct case of SET_SEARCH_RESULTS action type', () => {
    const initialState = [];
    const action = {
      type: 'SET_SEARCH_RESULTS',
      beers: [{}, {}, {}]
    };

    const result = [{}, {}, {}];

    expect(searchResults(initialState, action)).toEqual(result);
  });

  it('should not output the case of SET_SEARCH_RESULTS action type with the incorrect action', () => {
    const initialState = [];
    const incorrectAction = {
      type: 'RESET_SEARCH_RESULTS',
      beers: [{}, {}, {}]
    };

    expect(searchResults(initialState, incorrectAction)).toEqual(initialState);
  });
});
