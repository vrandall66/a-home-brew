const baseUrl = 'https://api.punkapi.com/v2/beers';

export const getPage1Beers = async () => {
  const page1response = await fetch(
    'https://api.punkapi.com/v2/beers?page=1&per_page=80'
  );

  const dataPage1 = await page1response.json();
  if (!page1response.ok) {
    throw new Error('Could not retrieve beers, please drink with us later.');
  }

  return dataPage1;
};

export const getPage2Beers = async () => {
  const page2response = await fetch(
    'https://api.punkapi.com/v2/beers?page=2&per_page=80'
  );

  const dataPage2 = await page2response.json();
  if (!page2response.ok) {
    throw new Error('Could not retrieve beers, please drink with us later.')
  }
  
  return dataPage2;
}

export const getPage3Beers = async () => {
  const page3response = await fetch(
    'https://api.punkapi.com/v2/beers?page=3&per_page=80'
  );

  const dataPage3 = await page3response.json();
  if (!page3response.ok) {
    throw new Error('Could not retrieve beers, please drink with us later.')
  }

  return dataPage3;
}

export const getPage4Beers = async () => {
  const page4response = await fetch(
    'https://api.punkapi.com/v2/beers?page=4&per_page=80'
  );

  const dataPage4 = await page4response.json();
  if (!page4response.ok) {
    throw new Error('Could not retrieve beers, please drink with us later.')
  }

  return dataPage4;
}

export const getPage5Beers = async () => {
  const page5response = await fetch(
    'https://api.punkapi.com/v2/beers?page=5&per_page=80'
  );

  const dataPage5 = await page5response.json();
  if (!page5response.ok) {
    throw new Error('Could not retrieve beers, please drink with us later.')
  }

  return dataPage5;
}

export const getBeerByName = async name => {
  const response = await fetch(`${baseUrl}?beer_name=${name}`);
  const data = await response.json();
  if (!response.ok) {
    throw new Error('Could not retrieve beers, please explore with us later.');
  }
  return data;
};

export const getBeerByHops = async hops => {
  const response = await fetch(`${baseUrl}?hops=${hops}`)
  const data = await response.json();
  if(!response.ok) {
    throw new Error('Could not retrieve beers, please explore with us later.')
  }
  return data;
}

export const getBeerByMalt = async malt => {
  const response = await fetch(`${baseUrl}malt=${malt}`)
  const data = response.json();
  if(!response.ok) {
    throw new Error('Could not retrieve beers, please explore with us later.')
  }
  return data;
}