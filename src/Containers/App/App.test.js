import React from 'react';
import { shallow } from 'enzyme';
import { setBeers } from '../../actions'
import { App, mapStateToProps, mapDispatchToProps } from './App';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe('mapStateToProps', () => {
  it('should return an object with beers, bookmarks, previousBrews and searchResults arrays', () => {
    const mockStoreState = {
      beers: [{}, {}, {}],
      bookmarks: [1, 2],
      previousBrews: [5],
      searchResults: [{}]
    };

    const expected = {
      beers: [{}, {}, {}],
      bookmarks: [1, 2],
      previousBrews: [5],
      searchResults: [{}]
    };

    const mappedProps = mapStateToProps(mockStoreState);

    expect(mappedProps).toEqual(expected);
  });
});

describe('mapDispatchToProps', () => {
  it('calls dispatch with setBeers', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = setBeers([{}, {}, {}]);

    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.setBeers([{}, {}, {}]);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});
