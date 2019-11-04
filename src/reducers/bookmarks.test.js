import { bookmarks } from './bookmarks';

describe('bookmarks', () => {
  it('should return the initial state', () => {
    const expected = [];

    const result = bookmarks(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should output the correct case of SET_BOOKMARK action type', () => {
    const initialState = [1];
    const action = {
      type: 'SET_BOOKMARK',
      beer: 2
    };

    const result = [1, 2];

    expect(bookmarks(initialState, action)).toEqual(result);
  });

  it('should not output the case of SET_BOOKMARK action type', () => {
    const initialState = [];
    const incorrectAction = {
      type: 'DELETE_BOOKMARK',
      beer: 2
    };

    expect(bookmarks(initialState, incorrectAction)).toEqual(initialState);
  });

  it('should output the correct case of REMOVE_BOOKMARK action type', () => {
    const initialState = [1, 2];
    const action = {
      type: 'REMOVE_BOOKMARK',
      beer: 1
    };

    const result = [2];

    expect(bookmarks(initialState, action)).toEqual(result);
  });

  it('should not output the case of REMOVE_BOOKMARK action type with the incorrect action', () => {
    const initialState = [1, 2];
    const wrongAction = {
      type: 'WRONG_ACTION',
      beer: [{}, {}, {}]
    };

    expect(bookmarks(initialState, wrongAction)).toEqual(initialState);
  });
});
