import { currentBrews } from './currentBrews';

describe('currentBrews', () => {
  it('should return the initial state', () => {
    const expected = [];

    const result = currentBrews(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should output the correct case of SET_CURRENT_BREW action type', () => {
    const initialState = [];
    const action = {
      type: 'SET_CURRENT_BREW',
      beer: 1
    };

    const result = [1];

    expect(currentBrews(initialState, action)).toEqual(result);
  });

  it('should not output the case of SET_CURRENT_BREW action type with the incorrect action', () => {
    const initialState = [];
    const incorrectAction = {
      type: 'TOGGLE_CURRENT_BREW',
      beers: false
    };

    expect(currentBrews(initialState, incorrectAction)).toEqual(initialState);
  });

  it('should output the correct case of REMOVE_CURRENT_BREW action type', () => {
    const initialState = [1];
    const action = {
      type: 'REMOVE_CURRENT_BREW',
      beer: 1
    };

    const result = [];

    expect(currentBrews(initialState, action)).toEqual(result);
  });

  it('should not output the case of REMOVE_CURRENT_BREW action type with the incorrect action', () => {
    const initialState = [1, 2];
    const wrongAction = {
      type: 'WRONG_ACTION',
      beer: 2
    };

    expect(currentBrews(initialState, wrongAction)).toEqual(initialState);
  });
});
