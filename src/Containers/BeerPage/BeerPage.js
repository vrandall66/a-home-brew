import React from 'react';

export const BeerPage = ({ beer }) => {
  return (
    <div>
      <h2>{beer.name}</h2>
      <h4>{beer.tagline}</h4>
      <aside>
        <h4>Ingredients</h4>
        <ul>
          Hops
          {beer.ingredients.hops}
        </ul>
        <ul>
          Malts
          {beer.ingredients.malt}
        </ul>
        <p>{beer.ingredients.yeast}</p>
      </aside>
    </div>
  );
};

export default BeerPage;
