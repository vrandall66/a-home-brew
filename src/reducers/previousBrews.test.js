import { previousBrews } from './previousBrews';

describe('previousBrews', () => {
  it('should return the initial state', () => {
    const expected = [];

    const result = previousBrews(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should output the correct case of SET_PREVIOUS_BREW action type', () => {
    const initialState = [1];
    const action = {
      type: 'SET_PREVIOUS_BREW',
      beer: 2
    };

    const result = [1, 2];

    expect(previousBrews(initialState, action)).toEqual(result);
  });

  it('should not output the case of SET_PREVIOUS_BREW action type', () => {
    const initialState = [];
    const incorrectAction = {
      type: 'DELETE_PREVIOUS_BREW',
      beer: 2
    };

    expect(previousBrews(initialState, incorrectAction)).toEqual(initialState);
  });

  it('should output the correct case of REMOVE_PREVIOUS_BREW action type', () => {
    const initialState = [1];
    const action = {
      type: 'REMOVE_PREVIOUS_BREW',
      beer: 1
    };

    const result = [];

    expect(previousBrews(initialState, action)).toEqual(result);
  });

  it('should not output the case of REMOVE_PREVIOUS_BREW action type with the incorrect action', () => {
    const initialState = [1, 2];
    const wrongAction = {
      type: 'WRONG_ACTION',
      beer: 3
    };

    expect(previousBrews(initialState, wrongAction)).toEqual(initialState);
  });
});
