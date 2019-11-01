import React from 'react';
import { Link } from 'react-router-dom';
import './BeerCard.scss'

export const BeerCard = ({ beer }) => {
  return (
    <div className='BeerCard' key={beer.id}>
      <h4>{beer.name}</h4>
      <p>{beer.tagline}</p>
      <Link to={`/beers/${beer.id}`}>
        <button type='button'>Read More</button>
      </Link>
    </div>
  );
};

export default BeerCard;
