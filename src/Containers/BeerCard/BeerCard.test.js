import React from 'react';
import { shallow } from 'enzyme';
import {
  setBookmark,
  removeBookmark,
  setPreviousBrew,
  removePreviousBrew
} from '../../apiCalls/apiCalls';
import { Link } from 'react-router-dom';
import { FaBookmark, FaRegBookmark, FaPlus, FaCheck } from 'react-icons/fa';
import { BeerCard, mapStateToProps, mapDispatchToProps } from './BeerCard';
jest.mock('../../apiCalls/apiCalls');

describe('BeerCard', () => {
  let wrapper, wrapper2;

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
    let id = 1;
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

    wrapper2 = shallow(
      <div className='BeerCard' key={beer.id}>
        <header className='BeerCard__header'>
          {bookmark ? (
            <FaBookmark onClick={() => this.handleSaveClick('bookmark')} />
          ) : (
            <FaRegBookmark onClick={() => this.handleSaveClick('bookmark')} />
          )}
          {previous ? (
            <FaCheck onClick={() => this.handleSaveClick('previous')} />
          ) : (
            <FaPlus onClick={() => this.handleSaveClick('previous')} />
          )}
        </header>
        <h4 className='BeerCard__h4--name'>{beer.name}</h4>
        <p className='BeerCard__p--tagline'>{beer.tagline}</p>
        <Link to={`/${type}/${beer.id}`}>
          <button type='button' className='BeerCard__button--readMore'>
            Read More
          </button>
        </Link>
      </div>
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
