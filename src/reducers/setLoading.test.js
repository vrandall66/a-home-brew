import { setLoading } from './setLoading';

describe('setLoading', () => {
  it('should return the initial state', () => {
    const expected = false;

    const result = setLoading(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should output the correct case of IS_LOADING action type', () => {
    const initialState = '';
    const action = {
      type: 'IS_LOADING',
      bool: false
    };

    const result = false;

    expect(setLoading(initialState, action)).toEqual(result);
  });

  it('should not output the case of IS_LOADING action type with the incorrect action', () => {
    const initialState = '';
    const incorrectAction = {
      type: 'RESET_LOADING',
      movies: false
    };

    expect(setLoading(initialState, incorrectAction)).toEqual(initialState);
  });
});
