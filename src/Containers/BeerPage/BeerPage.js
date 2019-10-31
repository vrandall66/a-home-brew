import React from 'react';

export const BeerPage = ({ beerDetails, match }) => {
  console.log('beerPage', beerDetails)
  console.log('match', match)
  return (
    <div>
      <h2>{beerDetails.name}</h2>
      <h4>{beerDetails.tagline}</h4>
      <aside>
        <h4>Ingredients</h4>
        <ul>
          Hops
          {/* {beerDetails.ingredients.hops} */}
        </ul>
        <ul>
          Malts
          {/* {beerDetails.ingredients.malt} */}
        </ul>
        <p>{beerDetails.ingredients.yeast}</p>
      </aside>
    </div>
  );
};

export default BeerPage;
