import React from 'react';
import { shallow } from 'enzyme';
import { SearchForm, mapStateToProps, mapDispatchToProps } from './SearchForm';

describe('SearchForm', () => {
  let wrapper;
  let beers = [
    {
      ingredients: {
        hops: [{}, {}, {}],
        malt: [{}, {}, {}],
        yeast: 'yeast'
      }
    },
    {
      ingredients: {
        hops: [{}, {}, {}],
        malt: [{}, {}, {}],
        yeast: 'yeast'
      }
    },
    {
      ingredients: {
        hops: [{}, {}, {}],
        malt: [{}, {}, {}],
        yeast: 'yeast'
      }
    }
  ];

  beforeEach(() => {
    wrapper = shallow(<SearchForm beers={beers} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
