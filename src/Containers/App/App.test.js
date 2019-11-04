import React from 'react';
import { shallow } from 'enzyme';
import { setBeers } from '../../actions';
import { getAllBeers } from '../../apiCalls/apiCalls';
import { App, mapStateToProps, mapDispatchToProps } from './App';

jest.mock('../../apiCalls/apiCalls');

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    let beers = [
      {
        id: 1,
        name: 'Buzz',
        description:
          'A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.'
      },
      {
        id: 2,
        name: 'Trashy Blonde',
        description:
          'A titillating, neurotic, peroxide punk of a Pale Ale. Combining attitude, style, substance, and a little bit of low self esteem for good measure; what would your mother say? The seductive lure of the sassy passion fruit hop proves too much to resist. All that is even before we get onto the fact that there are no additives, preservatives, pasteurization or strings attached. All wrapped up with the customary BrewDog bite and imaginative twist.'
      }
    ];
    wrapper = shallow(<App beers={beers} />);
    beforeEach(() => {
      getAllBeers.mockImplementation(() => {
        return Promise.resolve([
          {
            id: 1,
            name: 'Buzz',
            description:
              'A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.'
          },
          {
            id: 2,
            name: 'Trashy Blonde',
            description:
              'A titillating, neurotic, peroxide punk of a Pale Ale. Combining attitude, style, substance, and a little bit of low self esteem for good measure; what would your mother say? The seductive lure of the sassy passion fruit hop proves too much to resist. All that is even before we get onto the fact that there are no additives, preservatives, pasteurization or strings attached. All wrapped up with the customary BrewDog bite and imaginative twist.'
          }
        ]);
      });
    });
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should retrieve beers after mounting', () => {
    expect(getAllBeers).toHaveBeenCalled();
  });

  it('should renderBeersFromList', () => {
    let list = [1];
    let expected = [
      {
        id: 1,
        name: 'Buzz',
        description:
          'A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.'
      }
    ];

    wrapper.instance().renderBeersFromList(list);

    expect(wrapper.instance().renderBeersFromList(list)).toEqual(expected);
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
