import { React } from 'react';
import { shallow } from 'enzyme';
import {
  setBookmark,
  removeBookmark,
  setPreviousBrew,
  removePreviousBrew
} from '../../apiCalls/apiCalls';
import BeerCard, { mapStateToProps, mapDispatchToProps } from './BeerCard.js';

jest.mock('../../apiCalls/apiCalls');

describe('BeerCard', () => {
  let wrapper;

  beforeEach(() => {
    let beers = [{}, {}, {}];
    let bookmarks = [1, 2, 3];
    let previousBrews = [6, 7, 8];
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
    wrapper = shallow(<BeerCard />);
  });

  it.skip('should match the snapshot', () => {
    const wrapper2 = shallow(<BeerCard />);
    expect(wrapper2).toMatchSnapshot();
  });

  it.skip('should call handleSaveClick onClick of bookmark icon', () => {
    wrapper
      .instance()
      .find('FaBookmark')
      .simulate('click');

    expect(wrapper.instance().handleSaveClick).toHaveBeenCalled();
  });

  it.skip('should call handleSaveClick onClick of previous icon', () => {
    wrapper
      .instance()
      .find('FaCheck')
      .simulate('click');

    expect(wrapper.instance().handleSaveClick).toHaveBeenCalled();
  });
});
