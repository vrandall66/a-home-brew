export const getBeers = async () => {
  const response = await fetch('https://api.punkapi.com/v2/beers');
  const data = await response.json();
  if (!response.ok) {
    throw new Error('Could not retrieve beers, please drink with us later.')
  }
  return data;
}