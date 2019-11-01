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
  let mockResponse = [
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
  let mockResponse = [
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
  let mockResponse = [
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
  let mockResponse = [
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
  let mockResponse = [
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
