import {
  getPage1Beers,
  getPage2Beers,
  getPage3Beers,
  getPage4Beers,
  getPage5Beers,
  getBeerByName,
  getBeerByHops,
  getBeerByMalt,
  getBeerByYeast
} from './apiCalls';

describe('getPage1Beers', () => {
  const mockResponse = [
    {
      abv: 4.5,
      attenuation_level: 75,
      boil_volume: { value: 25, unit: 'litres' },
      brewers_tips:
        'The earthy and floral aromas from the hops can be overpowering. Drop a little Cascade in at the end of the boil to lift the profile with a bit of citrus.',
      contributed_by: 'Sam Mason <samjbmason>',
      description:
        'A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.',
      ebc: 20,
      first_brewed: '09/2007',
      food_pairing: [
        'Spicy chicken tikka masala',
        'Grilled chicken quesadilla',
        'Caramel toffee cake'
      ],
      ibu: 60,
      id: 1,
      image_url: 'https://images.punkapi.com/v2/keg.png',
      ingredients: {
        malt: [{}, {}, {}],
        hops: [{}, {}, {}, {}],
        yeast: 'Wyeast 1056 - American Ale™'
      },
      method: { mash_temp: [{}], fermentation: {}, twist: null },
      name: 'Buzz',
      ph: 4.4,
      srm: 10,
      tagline: 'A Real Bitter Experience.',
      target_fg: 1010,
      target_og: 1044,
      volume: { value: 20, unit: 'litres' }
    },
    {
      abv: 4.1,
      attenuation_level: 76,
      boil_volume: { value: 25, unit: 'litres' },
      brewers_tips:
        'Be careful not to collect too much wort from the mash. Once the sugars are all washed out there are some very unpleasant grainy tasting compounds that can be extracted into the wort.',
      contributed_by: 'Sam Mason <samjbmason>',
      description:
        'A titillating, neurotic, peroxide punk of a Pale Ale. Combining attitude, style, substance, and a little bit of low self esteem for good measure; what would your mother say? The seductive lure of the sassy passion fruit hop proves too much to resist. All that is even before we get onto the fact that there are no additives, preservatives, pasteurization or strings attached. All wrapped up with the customary BrewDog bite and imaginative twist.',
      ebc: 15,
      first_brewed: '04/2008',
      food_pairing: (4)[
        ('Fresh crab with lemon',
        'Garlic butter dipping sauce',
        'Goats cheese salad',
        'Creamy lemon bar doused in powdered sugar')
      ],
      ibu: 41.5,
      id: 2,
      image_url: 'https://images.punkapi.com/v2/2.png',
      ingredients: {
        malt: [{}, {}, {}],
        hops: [{}, {}, {}, {}],
        yeast: 'Wyeast 1056 - American Ale™'
      },
      method: { mash_temp: [{}], fermentation: {}, twist: null },
      name: 'Trashy Blonde',
      ph: 4.4,
      srm: 15,
      tagline: "You Know You Shouldn't",
      target_fg: 1010,
      target_og: 1041.7,
      volume: { value: 20, unit: 'litres' }
    }
  ];

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
  });

  it('should call fetch with the correct url', () => {
    getPage1Beers();

    expect(window.fetch).toHaveBeenCalledWith(
      'https://api.punkapi.com/v2/beers?page=1&per_page=80'
    );
  });

  it('should return an array of beer objects', () => {
    expect(getPage1Beers()).resolves.toEqual(mockResponse);
  });

  it('should return an error if the response is not okay', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });

    expect(getPage1Beers()).rejects.toEqual(
      Error('Could not retrieve beers, please drink with us later.')
    );
  });

  it('should return an error if the server is down', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('fetch failed.'));
    });

    expect(getPage1Beers()).rejects.toEqual(Error('fetch failed.'));
  });
});

describe('getPage2Beers', () => {
  const mockResponse = [
    {
      abv: 4.5,
      attenuation_level: 75,
      boil_volume: { value: 25, unit: 'litres' },
      brewers_tips:
        'The earthy and floral aromas from the hops can be overpowering. Drop a little Cascade in at the end of the boil to lift the profile with a bit of citrus.',
      contributed_by: 'Sam Mason <samjbmason>',
      description:
        'A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.',
      ebc: 20,
      first_brewed: '09/2007',
      food_pairing: [
        'Spicy chicken tikka masala',
        'Grilled chicken quesadilla',
        'Caramel toffee cake'
      ],
      ibu: 60,
      id: 1,
      image_url: 'https://images.punkapi.com/v2/keg.png',
      ingredients: {
        malt: [{}, {}, {}],
        hops: [{}, {}, {}, {}, {}],
        yeast: 'Wyeast 1056 - American Ale™'
      },
      method: { mash_temp: [{}], fermentation: {}, twist: null },
      name: 'Buzz',
      ph: 4.4,
      srm: 10,
      tagline: 'A Real Bitter Experience.',
      target_fg: 1010,
      target_og: 1044,
      volume: { value: 20, unit: 'litres' }
    },
    {
      abv: 4.1,
      attenuation_level: 76,
      boil_volume: { value: 25, unit: 'litres' },
      brewers_tips:
        'Be careful not to collect too much wort from the mash. Once the sugars are all washed out there are some very unpleasant grainy tasting compounds that can be extracted into the wort.',
      contributed_by: 'Sam Mason <samjbmason>',
      description:
        'A titillating, neurotic, peroxide punk of a Pale Ale. Combining attitude, style, substance, and a little bit of low self esteem for good measure; what would your mother say? The seductive lure of the sassy passion fruit hop proves too much to resist. All that is even before we get onto the fact that there are no additives, preservatives, pasteurization or strings attached. All wrapped up with the customary BrewDog bite and imaginative twist.',
      ebc: 15,
      first_brewed: '04/2008',
      food_pairing: (4)[
        ('Fresh crab with lemon',
        'Garlic butter dipping sauce',
        'Goats cheese salad',
        'Creamy lemon bar doused in powdered sugar')
      ],
      ibu: 41.5,
      id: 2,
      image_url: 'https://images.punkapi.com/v2/2.png',
      ingredients: {
        malt: [{}, {}, {}],
        hops: [{}, {}, {}, {}, {}],
        yeast: 'Wyeast 1056 - American Ale™'
      },
      method: { mash_temp: [{}], fermentation: {}, twist: null },
      name: 'Trashy Blonde',
      ph: 4.4,
      srm: 15,
      tagline: "You Know You Shouldn't",
      target_fg: 1010,
      target_og: 1041.7,
      volume: { value: 20, unit: 'litres' }
    }
  ];

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
  });

  it('should call fetch with the correct url', () => {
    getPage2Beers();

    expect(window.fetch).toHaveBeenCalledWith(
      'https://api.punkapi.com/v2/beers?page=2&per_page=80'
    );
  });

  it('should return an array of beer objects', () => {
    expect(getPage2Beers()).resolves.toEqual(mockResponse);
  });

  it('should return an error if the response is not okay', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });

    expect(getPage2Beers()).rejects.toEqual(
      Error('Could not retrieve beers, please drink with us later.')
    );
  });

  it('should return an error if the server is down', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('fetch failed.'));
    });

    expect(getPage2Beers()).rejects.toEqual(Error('fetch failed.'));
  });
});

describe('getPage3Beers', () => {
  const mockResponse = [
    {
      abv: 4.5,
      attenuation_level: 75,
      boil_volume: { value: 25, unit: 'litres' },
      brewers_tips:
        'The earthy and floral aromas from the hops can be overpowering. Drop a little Cascade in at the end of the boil to lift the profile with a bit of citrus.',
      contributed_by: 'Sam Mason <samjbmason>',
      description:
        'A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.',
      ebc: 20,
      first_brewed: '09/2007',
      food_pairing: [
        'Spicy chicken tikka masala',
        'Grilled chicken quesadilla',
        'Caramel toffee cake'
      ],
      ibu: 60,
      id: 1,
      image_url: 'https://images.punkapi.com/v2/keg.png',
      ingredients: {
        malt: [{}, {}, {}],
        hops: [{}, {}, {}, {}, {}],
        yeast: 'Wyeast 1056 - American Ale™'
      },
      method: { mash_temp: [{}], fermentation: {}, twist: null },
      name: 'Buzz',
      ph: 4.4,
      srm: 10,
      tagline: 'A Real Bitter Experience.',
      target_fg: 1010,
      target_og: 1044,
      volume: { value: 20, unit: 'litres' }
    },
    {
      abv: 4.1,
      attenuation_level: 76,
      boil_volume: { value: 25, unit: 'litres' },
      brewers_tips:
        'Be careful not to collect too much wort from the mash. Once the sugars are all washed out there are some very unpleasant grainy tasting compounds that can be extracted into the wort.',
      contributed_by: 'Sam Mason <samjbmason>',
      description:
        'A titillating, neurotic, peroxide punk of a Pale Ale. Combining attitude, style, substance, and a little bit of low self esteem for good measure; what would your mother say? The seductive lure of the sassy passion fruit hop proves too much to resist. All that is even before we get onto the fact that there are no additives, preservatives, pasteurization or strings attached. All wrapped up with the customary BrewDog bite and imaginative twist.',
      ebc: 15,
      first_brewed: '04/2008',
      food_pairing: (4)[
        ('Fresh crab with lemon',
        'Garlic butter dipping sauce',
        'Goats cheese salad',
        'Creamy lemon bar doused in powdered sugar')
      ],
      ibu: 41.5,
      id: 2,
      image_url: 'https://images.punkapi.com/v2/2.png',
      ingredients: {
        malt: [{}, {}, {}],
        hops: [{}, {}, {}, {}],
        yeast: 'Wyeast 1056 - American Ale™'
      },
      method: { mash_temp: [{}], fermentation: {}, twist: null },
      name: 'Trashy Blonde',
      ph: 4.4,
      srm: 15,
      tagline: "You Know You Shouldn't",
      target_fg: 1010,
      target_og: 1041.7,
      volume: { value: 20, unit: 'litres' }
    }
  ];

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
  });

  it('should call fetch with the correct url', () => {
    getPage3Beers();

    expect(window.fetch).toHaveBeenCalledWith(
      'https://api.punkapi.com/v2/beers?page=3&per_page=80'
    );
  });

  it('should return an array of beer objects', () => {
    expect(getPage3Beers()).resolves.toEqual(mockResponse);
  });

  it('should return an error if the response is not okay', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });

    expect(getPage3Beers()).rejects.toEqual(
      Error('Could not retrieve beers, please drink with us later.')
    );
  });

  it('should return an error if the server is down', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('fetch failed.'));
    });

    expect(getPage3Beers()).rejects.toEqual(Error('fetch failed.'));
  });
});

describe('getPage4Beers', () => {
  const mockResponse = [
    {
      abv: 4.5,
      attenuation_level: 75,
      boil_volume: { value: 25, unit: 'litres' },
      brewers_tips:
        'The earthy and floral aromas from the hops can be overpowering. Drop a little Cascade in at the end of the boil to lift the profile with a bit of citrus.',
      contributed_by: 'Sam Mason <samjbmason>',
      description:
        'A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.',
      ebc: 20,
      first_brewed: '09/2007',
      food_pairing: [
        'Spicy chicken tikka masala',
        'Grilled chicken quesadilla',
        'Caramel toffee cake'
      ],
      ibu: 60,
      id: 1,
      image_url: 'https://images.punkapi.com/v2/keg.png',
      ingredients: {
        malt: [{}, {}, {}],
        hops: [{}, {}, {}, {}, {}],
        yeast: 'Wyeast 1056 - American Ale™'
      },
      method: { mash_temp: [{}], fermentation: {}, twist: null },
      name: 'Buzz',
      ph: 4.4,
      srm: 10,
      tagline: 'A Real Bitter Experience.',
      target_fg: 1010,
      target_og: 1044,
      volume: { value: 20, unit: 'litres' }
    },
    {
      abv: 4.1,
      attenuation_level: 76,
      boil_volume: { value: 25, unit: 'litres' },
      brewers_tips:
        'Be careful not to collect too much wort from the mash. Once the sugars are all washed out there are some very unpleasant grainy tasting compounds that can be extracted into the wort.',
      contributed_by: 'Sam Mason <samjbmason>',
      description:
        'A titillating, neurotic, peroxide punk of a Pale Ale. Combining attitude, style, substance, and a little bit of low self esteem for good measure; what would your mother say? The seductive lure of the sassy passion fruit hop proves too much to resist. All that is even before we get onto the fact that there are no additives, preservatives, pasteurization or strings attached. All wrapped up with the customary BrewDog bite and imaginative twist.',
      ebc: 15,
      first_brewed: '04/2008',
      food_pairing: (4)[
        ('Fresh crab with lemon',
        'Garlic butter dipping sauce',
        'Goats cheese salad',
        'Creamy lemon bar doused in powdered sugar')
      ],
      ibu: 41.5,
      id: 2,
      image_url: 'https://images.punkapi.com/v2/2.png',
      ingredients: {
        malt: [{}, {}, {}],
        hops: [{}, {}, {}, {}],
        yeast: 'Wyeast 1056 - American Ale™'
      },
      method: { mash_temp: [{}], fermentation: {}, twist: null },
      name: 'Trashy Blonde',
      ph: 4.4,
      srm: 15,
      tagline: "You Know You Shouldn't",
      target_fg: 1010,
      target_og: 1041.7,
      volume: { value: 20, unit: 'litres' }
    }
  ];

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
  });

  it('should call fetch with the correct url', () => {
    getPage4Beers();

    expect(window.fetch).toHaveBeenCalledWith(
      'https://api.punkapi.com/v2/beers?page=4&per_page=80'
    );
  });

  it('should return an array of beer objects', () => {
    expect(getPage4Beers()).resolves.toEqual(mockResponse);
  });

  it('should return an error if the response is not okay', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });

    expect(getPage4Beers()).rejects.toEqual(
      Error('Could not retrieve beers, please drink with us later.')
    );
  });

  it('should return an error if the server is down', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('fetch failed.'));
    });

    expect(getPage4Beers()).rejects.toEqual(Error('fetch failed.'));
  });
});

describe('getPage5Beers', () => {
  const mockResponse = [
    {
      abv: 4.5,
      attenuation_level: 75,
      boil_volume: { value: 25, unit: 'litres' },
      brewers_tips:
        'The earthy and floral aromas from the hops can be overpowering. Drop a little Cascade in at the end of the boil to lift the profile with a bit of citrus.',
      contributed_by: 'Sam Mason <samjbmason>',
      description:
        'A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.',
      ebc: 20,
      first_brewed: '09/2007',
      food_pairing: [
        'Spicy chicken tikka masala',
        'Grilled chicken quesadilla',
        'Caramel toffee cake'
      ],
      ibu: 60,
      id: 1,
      image_url: 'https://images.punkapi.com/v2/keg.png',
      ingredients: {
        malt: [{}, {}, {}],
        hops: [{}, {}, {}, {}, {}],
        yeast: 'Wyeast 1056 - American Ale™'
      },
      method: { mash_temp: [{}], fermentation: {}, twist: null },
      name: 'Buzz',
      ph: 4.4,
      srm: 10,
      tagline: 'A Real Bitter Experience.',
      target_fg: 1010,
      target_og: 1044,
      volume: { value: 20, unit: 'litres' }
    },
    {
      abv: 4.1,
      attenuation_level: 76,
      boil_volume: { value: 25, unit: 'litres' },
      brewers_tips:
        'Be careful not to collect too much wort from the mash. Once the sugars are all washed out there are some very unpleasant grainy tasting compounds that can be extracted into the wort.',
      contributed_by: 'Sam Mason <samjbmason>',
      description:
        'A titillating, neurotic, peroxide punk of a Pale Ale. Combining attitude, style, substance, and a little bit of low self esteem for good measure; what would your mother say? The seductive lure of the sassy passion fruit hop proves too much to resist. All that is even before we get onto the fact that there are no additives, preservatives, pasteurization or strings attached. All wrapped up with the customary BrewDog bite and imaginative twist.',
      ebc: 15,
      first_brewed: '04/2008',
      food_pairing: (4)[
        ('Fresh crab with lemon',
        'Garlic butter dipping sauce',
        'Goats cheese salad',
        'Creamy lemon bar doused in powdered sugar')
      ],
      ibu: 41.5,
      id: 2,
      image_url: 'https://images.punkapi.com/v2/2.png',
      ingredients: {
        malt: [{}, {}, {}],
        hops: [{}, {}, {}, {}],
        yeast: 'Wyeast 1056 - American Ale™'
      },
      method: { mash_temp: [{}], fermentation: {}, twist: null },
      name: 'Trashy Blonde',
      ph: 4.4,
      srm: 15,
      tagline: "You Know You Shouldn't",
      target_fg: 1010,
      target_og: 1041.7,
      volume: { value: 20, unit: 'litres' }
    }
  ];

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
  });

  it('should call fetch with the correct url', () => {
    getPage5Beers();

    expect(window.fetch).toHaveBeenCalledWith(
      'https://api.punkapi.com/v2/beers?page=5&per_page=80'
    );
  });

  it('should return an array of beer objects', () => {
    expect(getPage5Beers()).resolves.toEqual(mockResponse);
  });

  it('should return an error if the response is not okay', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });

    expect(getPage5Beers()).rejects.toEqual(
      Error('Could not retrieve beers, please drink with us later.')
    );
  });

  it('should return an error if the server is down', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('fetch failed.'));
    });

    expect(getPage5Beers()).rejects.toEqual(Error('fetch failed.'));
  });
});

describe('getBeerByName', () => {
  const mockResponse = [
    {
      abv: 9,
      attenuation_level: 80,
      boil_volume: { value: 25, unit: 'litres' },
      brewers_tips:
        'Soak oak chips in rum, then steep in the beer for the rum cash finish.',
      contributed_by: 'Sam Mason <samjbmason>',
      description:
        'Whisky cask aged with raisins soaked in rum. Warm, chocolatey and boozy with refreshing resinous bitterness and a lingering toasty biscuit background from the malt. Toasted oak comes courtesy of the barrels and spicy, sweet, dark fruit flavours from the rum soaked raisins.',
      ebc: 190,
      first_brewed: '07/2012',
      food_pairing: (3)[
        ('Venison stroganoff', 'Chilli dog', 'Toffee chocolate cheesecake')
      ],
      ibu: 70,
      id: 175,
      image_url: 'https://images.punkapi.com/v2/175.png',
      ingredients: {
        malt: [{}, {}, {}, {}, {}],
        hops: [{}, {}, {}],
        yeast: 'Wyeast 1272 - American Ale II™'
      },
      method: {
        mash_temp: [{}],
        fermentation: {},
        twist: 'Age in whisky casks with rum soaked raisins'
      },
      name: 'San Diego Scotch Ale (w/Ballast Point)',
      ph: 4.4,
      srm: 95,
      tagline: 'Imperial Scotch Ale With Rum & Raisin.',
      target_fg: 1018,
      target_og: 1090,
      volume: { value: 20, unit: 'litres' }
    },
    {
      abv: 4,
      attenuation_level: 79,
      boil_volume: { value: 25, unit: 'litres' },
      brewers_tips:
        "If you dry hop with extra Sorachi Ace you'll end up with an awesome extra hit of lemony zing but be warned, it'll go through a lot of interesting variations on the way, including coconut and even bubblegum! Give it time though and it'll land back at that lovely lemon zest that will compliment the coriander seeds perfectly.",
      contributed_by: 'John Jenkman <johnjenkman>',
      description:
        'This brew is a pale ale fermented with Belgian yeast and spiced with coriander seed.',
      ebc: 15,
      first_brewed: '2016',
      food_pairing: [
        'Californian Sushi Roll',
        'Parmesan and Rocket Pizza',
        'Coconut Cake'
      ],
      ibu: 25,
      id: 251,
      image_url: 'https://images.punkapi.com/v2/keg.png',
      ingredients: {
        malt: [{}, {}, {}, {}, {}],
        hops: [{}, {}],
        yeast: 'Wyeast 1388 - Belgian Strong Ale™'
      },
      method: {
        mash_temp: [{}],
        fermentation: {},
        twist: 'Crushed Coridaner Seeds – FV'
      },
      name: 'Small Batch: Sorachi Ace Session',
      ph: 5.1,
      srm: 7.62,
      tagline: 'Sorachi Ace Belgian Pale.',
      target_fg: 1005,
      target_og: 1035,
      volume: { value: 20, unit: 'litres' }
    }
  ];

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
  });

  it('should call fetch with the correct url and beer name argument', () => {
    getBeerByName('saisson');

    expect(window.fetch).toHaveBeenCalledWith(
      'https://api.punkapi.com/v2/beers?beer_name=saisson'
    );
  });

  it('should return an array of beer objects', () => {
    expect(getBeerByName('saisson')).resolves.toEqual(mockResponse);
  });

  it('should return an error if the response is not okay', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });

    expect(getBeerByName('saisson')).rejects.toEqual(
      Error('Could not retrieve beers, please explore with us later.')
    );
  });

  it('should return an error if the server is down', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('fetch failed.'));
    });

    expect(getBeerByName('saisson')).rejects.toEqual(Error('fetch failed.'));
  });
});

describe('getBeerByHops', () => {
  const mockResponse = {
    abv: 8,
    attenuation_level: 83.78,
    boil_volume: { value: 25, unit: 'litres' },
    brewers_tips:
      'Lightly toast the coconut chips to allow better interaction with the hot wort.',
    contributed_by: 'John Jenkman <johnjenkman>',
    description:
      'We gave our Equity Punks the keys to the brewery and let them brew the beer, as well as join Q&As and tour our HQ. The beer was voted on exclusively by Equity Punks.',
    ebc: 60,
    first_brewed: '2016',
    food_pairing: [
      'Loaded Hamburger and Spicy Fries',
      'Warm Banana Bread',
      'Pineapple Sponge Cake'
    ],
    ibu: 60,
    id: 245,
    image_url: null,
    ingredients: {
      malt: [{}, {}, {}],
      hops: [{}, {}, {}, {}, {}, {}],
      yeast: 'Wyeast 1272 - American Ale II™'
    },
    method: {
      mash_temp: [{}],
      fermentation: {},
      twist: null
    },
    name: 'Beatnik',
    ph: 5.2,
    srm: 30.5,
    tagline: 'Imperial Red Ale',
    target_fg: 1013,
    target_og: 1075,
    volume: { value: 20, unit: 'litres' }
  };

  it('should call fetch with the correct url and hops argument', () => {
    getBeerByHops('apollo');

    expect(window.fetch).toHaveBeenCalledWith(
      'https://api.punkapi.com/v2/beers?hops=apollo'
    );
  });

  it('should return an array of beer objects', () => {
    expect(getBeerByHops('apollo')).resolves.toEqual(mockResponse);
  });

  it('should return an error if the response is not okay', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });

    expect(getBeerByHops('apollo')).rejects.toEqual(
      Error('Could not retrieve beers, please explore with us later.')
    );
  });

  it('should return an error if the server is down', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('fetch failed.'));
    });

    expect(getBeerByHops('apollo')).rejects.toEqual(Error('fetch failed.'));
  });
});

describe('getBeerByMalt', () => {
  const mockResponse = [
    {
      abv: 5,
      attenuation_level: 84,
      boil_volume: { value: 25, unit: 'litres' },
      brewers_tips:
        'Instead of using Pilsner, try to substitute this out for more Vienna malt. This is more traditional but you should calculate your diastatic power for your new mash. Ideally it should be a minimum of 30 to 50 Lintner.',
      contributed_by: 'John Jenkman <johnjenkman>',
      description:
        'A new 5% ABV Vienna Lager, that features in Fanzine, our new subscription model.',
      ebc: 14,
      first_brewed: '2018',
      food_pairing: [
        'Grilled chicken and steamed vegetables',
        'Pork sausages',
        'Almond biscotti'
      ],
      ibu: 25,
      id: 323,
      image_url: null,
      ingredients: {
        malt: [{}, {}, {}, {}, {}],
        hops: [{}, {}, {}],
        yeast: 'Wyeast 2126 - Bohemian Lager™'
      },
      method: {
        mash_temp: [{}],
        fermentation: {},
        twist: null
      },
      name: 'Interstate Vienna Lager.',
      ph: 4.2,
      srm: 7,
      tagline: 'Vienna Lager.',
      target_fg: 1007,
      target_og: 1045,
      volume: { value: 20, unit: 'litres' }
    },
    {
      abv: 5,
      attenuation_level: 85,
      boil_volume: { value: 25, unit: 'litres' },
      brewers_tips:
        'Acidulated malt was first produced to circumvent the Reinheitsgebot in Germany where they could not acidify their brewing water. A weak organic acid such as lactic acid can be used in its place.',
      contributed_by: 'John Jenkman <johnjenkman>',
      description:
        'BrewDog vs Oedipus. One of a series of collaborations with European craft breweries, aimed at promoting engagement and market growth. This India pale lager has been brewed with Dutch brewers Oedipus.',
      ebc: 12,
      first_brewed: '2018',
      food_pairing: [
        'Roast Chicken',
        'Spicy jalapeño and seared steak fajitas',
        'Peach cobbler'
      ],
      ibu: 40,
      id: 318,
      image_url: null,
      ingredients: {
        malt: [{}, {}, {}, {}],
        hops: [{}, {}, {}, {}, {}, {}, {}, {}],
        yeast: 'Wyeast 2126 - Bohemian Lager™'
      },
      method: {
        mash_temp: [{}],
        fermentation: {},
        twist: null
      },
      name: 'Neverland',
      ph: 4.2,
      srm: 6,
      tagline: 'India Pale Lager.',
      target_fg: 1007,
      target_og: 1048,
      volume: { value: 20, unit: 'litres' }
    }
  ];

  it('should call fetch with the correct url and malt argument', () => {
    getBeerByMalt('vienna');

    expect(window.fetch).toHaveBeenCalledWith(
      'https://api.punkapi.com/v2/beers?malt=vienna'
    );
  });

  it('should return an array of beer objects', () => {
    expect(getBeerByMalt('vienna')).resolves.toEqual(mockResponse);
  });

  it('should return an error if the response is not okay', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });

    expect(getBeerByMalt('vienna')).rejects.toEqual(
      Error('Could not retrieve beers, please explore with us later.')
    );
  });

  it('should return an error if the server is down', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('fetch failed.'));
    });

    expect(getBeerByMalt('vienna')).rejects.toEqual(Error('fetch failed.'));
  });
});
