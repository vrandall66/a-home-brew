import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { FaRegBookmark } from 'react-icons/fa';
import { toggleBookmark, setBookmark } from '../../actions';
import './BeerCard.scss';

export const BeerCard = ({ beer, toggleBookmark, setBookmark }) => {

  const handleClick = () => {
    setBookmark(beer)
    toggleBookmark(beer)
  }

  return (
    <div className='BeerCard' key={beer.id}>
      <FaRegBookmark onClick={handleClick} />
      <h4>{beer.name}</h4>
      <p>{beer.tagline}</p>
      <Link to={`/beers/${beer.id}`}>
        <button type='button'>Read More</button>
      </Link>
    </div>
  );
};

export const mapDispatchToProps = dispatch => {
  return bindActionCreators({ toggleBookmark, setBookmark }, dispatch);
};

export default connect(null, mapDispatchToProps)(BeerCard);
