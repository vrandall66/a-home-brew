import React from 'react';
import { connect } from 'react-redux';
import BeerCard from '../BeerCard/BeerCard';
import './Container.scss';

export const Container = ({ beers, type, list }) => {
  // if list.length is true:
  // invoke beersToRender
  // else, render beers from store
  //

  const beersToRender = () => {
    return beers.reduce((markedBeers, beer) => {
        if (list.includes(beer.id)) {
          markedBeers.push(beer)
        }
        return markedBeers;
      }, []);
  };

  // (reduce beers to only include beers on the list) : (beers)

  // CHANGE to iterating through
  const listLength = list.length ? (
    // CHANGE BEERS TO beersToRender
    beers.map(beer => {
      return <BeerCard key={beer.id} beer={beer} type={type} />;
    })
  ) : (
    <div>{`There are no ${type}!`}</div>
  );

  return <div className='Container'>{beersLength}</div>;
};

export const mapStateToProps = ({ beers }) => ({
  beers
});

export default connect(mapStateToProps)(Container);
