import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { FaRegBookmark } from 'react-icons/fa';
import { toggleBookmark, setBookmark } from '../../actions';
import './BeerCard.scss';

export const BeerCard = ({
  beer,
  type,
  toggleBookmark,
  setBookmark,
  bookmarks
}) => {
  const handleClick = e => {
    e.preventDefault();
    let foundBeer = bookmarks.find(brew => {
      return brew.id === beer.id;
    });
    return foundBeer ? toggleBookmark(beer) : setBookmark(beer);
  };

  return (
    <div className='BeerCard' key={beer.id}>
      <FaRegBookmark onClick={handleClick} />
      <h4 className='BeerCard__h4--name'>{beer.name}</h4>
      <p className='BeerCard__p--tagline'>{beer.tagline}</p>
      <Link to={`/${type}/${beer.id}`}>
        <button type='button' className='BeerCard__button--readMore'>
          Read More
        </button>
      </Link>
    </div>
  );
};

export const mapStateToProps = ({ bookmarks }) => ({
  bookmarks
});

export const mapDispatchToProps = dispatch => {
  return bindActionCreators({ toggleBookmark, setBookmark }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BeerCard);
