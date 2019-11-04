import React from 'react';
import { shallow } from 'enzyme';
import { setSearchResults } from '../../actions';
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
  const mockEvent = {
    target: {
      name: 'searchTerm',
      value: 'Stout'
    }
  };

  beforeEach(() => {
    wrapper = shallow(<SearchForm beers={beers} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should update it's state property onChange of searchTerm input", () => {
    wrapper.instance().handleChange(mockEvent);

    expect(wrapper.state()).toEqual({
      searchTerm: 'Stout',
      hops: '',
      malt: '',
      yeast: ''
    });
  });

  it('should call handleClick on submit', () => {
    wrapper.instance().handleSubmit = jest.fn();
    wrapper.instance().forceUpdate();
    wrapper.find('.SearchForm').simulate('submit');

    expect(wrapper.instance().handleSubmit).toHaveBeenCalled();
  });

  it('should call handleClick within handleSubmit', () => {
    const event = { preventDefault: () => {} };
    jest.spyOn(event, 'preventDefault');
    wrapper.instance().handleClick = jest.fn();
    wrapper.instance().handleSubmit(event);

    expect(event.preventDefault).toBeCalled();
    expect(wrapper.instance().handleClick).toHaveBeenCalled();
  });
});

describe('mapStateToProps', () => {
  it('should return an object with a beers array and searchResults array', () => {
    const mockStoreState = {
      beers: [{}, {}, {}],
      searchResults: [{}]
    };

    const expected = {
      beers: [{}, {}, {}],
      searchResults: [{}]
    };

    const mappedProps = mapStateToProps(mockStoreState);

    expect(mappedProps).toEqual(expected);
  });
});

describe('mapDispatchToProps', () => {
  it('calls dispatch with a setSearchResults, when handleClick is called', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = setSearchResults([{}, {}, {}]);

    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.setSearchResults([{}, {}, {}]);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});
