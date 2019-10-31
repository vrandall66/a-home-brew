import React from 'react';
import { Link } from 'react-router-dom';

export const BeerCard = ({ beer }) => {
  return (
    <div className='BeerCard'>
      <h4>{beer.name}</h4>
      <p>{beer.tagline}</p>
      <Link to={`/beers/${beer.id}`}>
        <button type='button'>Read More</button>
      </Link>
    </div>
  );
};

export default BeerCard;
