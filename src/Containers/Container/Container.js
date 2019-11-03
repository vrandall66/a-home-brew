import React from 'react';
import BeerCard from '../BeerCard/BeerCard';
import './Container.scss';

export const Container = ({ beers, type, list }) => {
  // if list.length is true:
  // 

  // const beersToRender = list ? (reduce beers to only include beers on the list) : (beers)


  // CHANGE to iterating through 
  const beersLength = beers.length ? (
    // CHANGE BEERS TO beersToRender
    beers.map(beer => {
      return <BeerCard key={beer.id} beer={beer} type={type} />;
    })
  ) : (
    <div>{`There are no ${type}!`}</div>
  );

  return <div className='Container'>{beersLength}</div>;
};

export default Container;
