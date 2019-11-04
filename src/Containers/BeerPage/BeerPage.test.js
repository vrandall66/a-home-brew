import React from 'react';
import { shallow } from 'enzyme';
import BeerPage from './BeerPage';

describe('BeerPage', () => {
  let wrapper;
  let beerDetails = {
    id: 1,
    name: 'Buzz',
    tagline: 'A Real Bitter Experience.',
    first_brewed: '09/2007',
    food_pairing: [
      'Spicy chicken tikka masala',
      'Grilled chicken quesadilla',
      'Caramel toffee cake'
    ],
    description:
      'A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.',
    image_url: 'https://images.punkapi.com/v2/keg.png',
    ingredients: {
      hops: [
        { name: 'Fuggles', amount: {}, add: 'start', attribute: 'bitter' },
        { name: 'First Gold', amount: {}, add: 'start', attribute: 'bitter' },
        { name: 'Fuggles', amount: {}, add: 'middle', attribute: 'flavour' },
        { name: 'First Gold', amount: {}, add: 'middle', attribute: 'flavour' },
        { name: 'Cascade', amount: {}, add: 'end', attribute: 'flavour' }
      ],
      malt: [
        { name: 'Maris Otter Extra Pale', amount: {} },
        { name: 'Caramalt', amount: {} },
        { name: 'Munich', amount: {} }
      ],
      yeast: 'Wyeast 1056 - American Ale™'
    },
    method: {
      fermentation: {
        temp: { value: 19, unit: 'celsius' }
      },
      mash_temp: [{ duration: 75, temp: { value: 64, unit: 'celsius' } }]
    },
    abv: 4.5,
    ibu: 60,
    target_fg: 1010,
    target_og: 1044,
    ebc: 20,
    srm: 10,
    ph: 4.4,
    attenuation_level: 75,
    boil_volume: {
      unit: 'litres',
      value: 25
    },
    brewers_tips:
      'The earthy and floral aromas from the hops can be overpowering. Drop a little Cascade in at the end of the boil to lift the profile with a bit of citrus.',
    contributed_by: 'Sam Mason <samjbmason>',
    volume: { value: 20, unit: 'litres' }
  };

  beforeEach(() => {
    wrapper = shallow(<BeerPage beerDetails={beerDetails} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
