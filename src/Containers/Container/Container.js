import React from 'react';
import { connect } from 'react-redux';
import BeerCard from '../BeerCard/BeerCard';
import './Container.scss';

export const Container = ({ beers, type }) => {
  const displayBeers = beers.map(beer => {
    return <BeerCard key={beer.id} beer={beer} type={type} />;
  });

  switch (type) {
    case 'browse':
      return <div className='Container'key={'browse'} >{displayBeers}</div>;
    case 'bookmarked':
      return <div className='Container'key={'bookmarked'} >{displayBeers}</div>;
    default:
      return <div className='Container'key={'beers'} >{displayBeers}</div>;
  }
};

export default Container;// export const Container = ({ beers, type, list }) => {
//   // if list.length is true:
//   // 

//   // const beersToRender = list ? (reduce beers to only include beers on the list) : (beers)


//   // CHANGE to iterating through 
//   const beersLength = beers.length ? (
//     // CHANGE BEERS TO beersToRender
//     beers.map(beer => {
//       return <BeerCard key={beer.id} beer={beer} type={type} />;
//     })
//   ) : (
//       <div>{`There are no ${type}!`}</div>
//     );

//   return <div className='Container'>{beersLength}</div>;
// };