import React from 'react';
import BeerCard from '../BeerCard/BeerCard';
import { connect } from 'react-redux';
import './Container.scss';

export const Container = ({ beers, type, bookmarks }) => {
  const getBookmarkStatus = (id) => {
    let status = bookmarks.includes(id) ? true : false;
    return status;
  }

  const displayBeers = beers.map(beer => {
    let bookmark = getBookmarkStatus(beer.id)
    return <BeerCard key={beer.id} beer={beer} type={type} bookmark={bookmark}/>;
  });

  switch (type) {
    case 'browse':
      return (
        <div className='Container' key={'browse'}>
          {displayBeers}
        </div>
      );
    case 'bookmarked':
      return (
        <div className='Container' key={'bookmarked'}>
          {displayBeers}
        </div>
      );
    case 'previously_brewed':
      return (
        <div className='Container' key={'previously_brewed'}>
          {displayBeers}
        </div>
      );
    case 'search_results':
      return (
        <div className='Container' key={'search_results'}>
          {displayBeers}
        </div>
      );
    default:
      return (
        <div className='Container' key={'beers'}>
          {displayBeers}
        </div>
      );
  }
};

export const mapStateToProps = ({ beers, bookmarks }) => ({
  beers,
  bookmarks
});

export default connect(mapStateToProps)(Container);
