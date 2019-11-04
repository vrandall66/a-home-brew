import React from 'react';
import { shallow } from 'enzyme';
import { setSearchResults } from '../../actions';
import { SearchForm, mapStateToProps, mapDispatchToProps } from './SearchForm';

describe('SearchForm', () => {
  let wrapper;
  let beers = [
    {
      ingredients: {
        hops: [
          { name: 'Amarillo' },
          { name: 'Fuggles' },
          { name: 'First Gold' }
        ],
        malt: [{ name: 'Brown' }, { name: 'Wheat' }, { name: 'Amber' }],
        yeast: ['Wyeast 1056 - American Ale™']
      }
    },
    {
      ingredients: {
        hops: [{ name: 'Amarillo' }, { name: 'Fuggles' }, { name: 'Simcoe' }],
        malt: [{ name: 'Brown' }, { name: 'Flaked Oats' }, { name: 'Amber' }],
        yeast: ['Wyeast 2126 - Bohemian Lager™']
      }
    },
    {
      ingredients: {
        hops: [
          { name: 'Amarillo' },
          { name: 'First Gold' },
          { name: 'Simcoe' }
        ],
        malt: [
          { name: 'Flaked Oats' },
          { name: 'Wheat' },
          { name: 'Caramalt' }
        ],
        yeast: ['Wyeast 3333 - German Wheat™']
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

  it('should get all of the types of hops from the fetched beer data', () => {
    const expected = ['Amarillo', 'First Gold', 'Fuggles', 'Simcoe'];

    let sortedHops = wrapper.instance().getHopsOptions();
    expect(sortedHops).toEqual(expected);
  });

  it('should get all of the types of malts from the fetched beer data', () => {
    const expected = ['Amber', 'Brown', 'Caramalt', 'Flaked Oats', 'Wheat'];

    let sortedMalts = wrapper.instance().getMaltOptions();
    expect(sortedMalts).toEqual(expected);
  });

  it('should get all of the types of yeast from the fetched beer data', () => {
    const expected = [
      ['Wyeast 1056 - American Ale™'],
      ['Wyeast 2126 - Bohemian Lager™'],
      ['Wyeast 3333 - German Wheat™']
    ];

    let sortedYeasts = wrapper.instance().getYeastOptions();
    expect(sortedYeasts).toEqual(expected);
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
