import React from 'react';
import { shallow } from 'enzyme';
import {} from '../../actions';
import {
  setBookmark,
  removeBookmark,
  setPreviousBrew,
  removePreviousBrew
} from '../../actions';
import { BeerCard, mapStateToProps, mapDispatchToProps } from './BeerCard';
jest.mock('../../apiCalls/apiCalls');

describe('BeerCard', () => {
  let wrapper;

  beforeEach(() => {
    let beer = {
      id: 1,
      name: 'Buzz',
      tagline: 'A Real Bitter Experience.',
      first_brewed: '09/2007',
      description:
        'A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.',
      image_url: 'https://images.punkapi.com/v2/keg.png',
      abv: 4.5,
      ibu: 60,
      target_fg: 1010,
      target_og: 1044,
      ebc: 20,
      srm: 10,
      ph: 4.4,
      attenuation_level: 75,
      brewers_tips:
        'The earthy and floral aromas from the hops can be overpowering. Drop a little Cascade in at the end of the boil to lift the profile with a bit of citrus.',
      contributed_by: 'Sam Mason <samjbmason>'
    };
    let type = 'bookmark';
    let bookmark = true;
    let previous = false;

    wrapper = shallow(
      <BeerCard
        key={beer.id}
        beer={beer}
        type={type}
        bookmark={bookmark}
        previous={previous}
      />
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call handleSaveClick onClick of bookmark icon', () => {
    wrapper.instance().handleSaveClick = jest.fn();
    wrapper.instance().forceUpdate();
    wrapper.find('FaBookmark').simulate('click');

    expect(wrapper.instance().handleSaveClick).toHaveBeenCalled();
  });

  it('should call handleSaveClick onClick of previous icon', () => {
    wrapper.instance().handleSaveClick = jest.fn();
    wrapper.instance().forceUpdate();
    wrapper.find('FaPlus').simulate('click');

    expect(wrapper.instance().handleSaveClick).toHaveBeenCalled();
  });
});

describe('mapStateToProps', () => {
  it('should return an object with beers, bookmarks and previousBrews arrays', () => {
    const mockStoreState = {
      beers: [{}, {}, {}],
      bookmarks: [1, 2],
      previousBrews: [5]
    };

    const expected = {
      beers: [{}, {}, {}],
      bookmarks: [1, 2],
      previousBrews: [5]
    };

    const mappedProps = mapStateToProps(mockStoreState);

    expect(mappedProps).toEqual(expected);
  });
});

describe('mapDispatchToProps', () => {
  it('calls dispatch with setBookmark', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = setBookmark(1);

    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.setBookmark(1);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('calls dispatch with removeBookmark', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = removeBookmark(1);

    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.removeBookmark(1);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('calls dispatch with setPreviousBrew', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = setPreviousBrew(1);

    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.setPreviousBrew(1);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('calls dispatch with removePreviousBrew', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = removePreviousBrew(1);

    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.removePreviousBrew(1);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});
