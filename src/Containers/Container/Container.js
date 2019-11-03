import React from 'react';
import { connect } from 'react-redux';
import BeerCard from '../BeerCard/BeerCard';
import './Container.scss';

export const Container = ({ beers, list, type }) => {
  console.log(beers);
  const renderBeersFromList = () => {
    let renderable = beers.reduce((markedBeers, beer) => {
      if (list.includes(beer.id)) {
        markedBeers.push(beer);
      }
      return markedBeers;
    }, []);
    renderable.map(beer => {
      return <BeerCard key={beer.id} beer={beer} type={type} />;
    });
  };

  const renderBeersFromStore = () => {
    return beers.map(beer => {
      return <BeerCard key={beer.id} beer={beer} type={'beers'} />;
    });
  };

  return (
    <div className='Container'>
      {beers
        ? list.length
          ? renderBeersFromList()
          : renderBeersFromStore()
        : null}
    </div>
  );
};

export const mapStateToProps = ({ beers }) => ({
  beers
});

export default connect(mapStateToProps)(Container);
