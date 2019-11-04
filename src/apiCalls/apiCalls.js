const baseUrl = 'https://api.punkapi.com/v2/beers';

export const getBeerByName = async name => {
  const response = await fetch(`${baseUrl}?beer_name=${name}`);
  if (!response.ok) {
    throw new Error('Could not retrieve beers, please explore with us later.');
  }
  const data = await response.json();
  return data;
};

export const getBeerByHops = async hops => {
  const response = await fetch(`${baseUrl}?hops=${hops}`);
  if (!response.ok) {
    throw new Error('Could not retrieve beers, please explore with us later.');
  }
  const data = await response.json();
  return data;
};

export const getBeerByMalt = async malt => {
  const response = await fetch(`${baseUrl}?malt=${malt}`);
  if (!response.ok) {
    throw new Error('Could not retrieve beers, please explore with us later.');
  }
  const data = await response.json();
  return data;
};

export const getBeerByYeast = async yeast => {
  const response = await fetch(`${baseUrl}?yeast=${yeast}`);
  if (!response.ok) {
    throw new Error('Could not retrieve beers, please explore with us later.');
  }
  const data = await response.json();
  return data;
};

export const getAllBeers = async (beers, pageNum) => {
  const response = await fetch(`${baseUrl}?page=${pageNum}&per_page=80`);
  if (!response.ok) {
    throw new Error('Could not retrieve beers, please explore with us later.');
  }
  const data = await response.json();
  if (!data.length) {
    return beers;
  }
  beers = [...beers, ...data];
  return getAllBeers(beers, pageNum + 1);
};
