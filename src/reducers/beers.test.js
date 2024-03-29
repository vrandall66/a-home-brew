import { beers } from './beers';

describe('beers', () => {
  it('should return the initial state', () => {
    const expected = [];

    const result = beers(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should output the correct case of SET_BEERS action type', () => {
    const initialState = [];
    const action = {
      type: 'SET_BEERS',
      beers: [{}, {}, {}]
    };

    const result = [{}, {}, {}];

    expect(beers(initialState, action)).toEqual(result);
  });

  it('should not output the case of SET_BEERS action type with the incorrect action', () => {
    const initialState = [];
    const incorrectAction = {
      type: 'TOGGLE_BEERS',
      beers: false
    };

    expect(beers(initialState, incorrectAction)).toEqual(initialState);
  });
});
