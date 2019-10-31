import React from 'react';
import BeerCard from '../BeerCard/BeerCard';
import './Container.scss';

export const Container = ({ beers }) => {
  const displayBeers = beers.map(beer => {
    return <BeerCard key={beer.id} beer={beer} />;
  });
  return <div className='Container'>{displayBeers}</div>;
};

export default Container;
