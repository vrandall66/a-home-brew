import React from 'react';
import BeerCard from '../BeerCard/BeerCard';
import './Container.scss';

export const Container = ({ beers, type }) => {
  const displayBeers = beers.map(beer => {
    return <BeerCard key={beer.id} beer={beer} type={type}/>;
  });

  switch (type) {
    case 'browse':
      return <div className='Container'>{displayBeers}</div>;
    case 'bookmarked':
      return <div className='Container'>{displayBeers}</div>;
    default:
      return <div className='Container'>{displayBeers}</div>;
  }
};

export default Container;
