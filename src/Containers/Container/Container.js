import React from 'react';
import BeerCard from '../BeerCard/BeerCard';
import './Container.scss';

export const Container = ({ beers, type }) => {
  const beersLength = beers.length ? (
    beers.map(beer => {
      return <BeerCard key={beer.id} beer={beer} type={type} />;
    })
  ) : (
    <div>{`There are no ${type}!`}</div>
  );

  return <div className='Container'>{beersLength}</div>;
};

export default Container;
