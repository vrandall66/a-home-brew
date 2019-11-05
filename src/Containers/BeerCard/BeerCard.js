import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { FaBookmark, FaRegBookmark, FaPlus, FaCheck } from 'react-icons/fa';
import { PropTypes } from 'prop-types';
import {
  removeBookmark,
  setBookmark,
  setPreviousBrew,
  removePreviousBrew
} from '../../actions';
import './BeerCard.scss';

export class BeerCard extends Component {
  handleSaveClick = list => {
    const { id } = this.props.beer;
    switch (list) {
      case 'bookmark':
        this.toggleBookmark(id);
        break;
      case 'previous':
        this.togglePreviousBrew(id);
        break;
      default:
        return null;
    }
  };

  toggleBookmark = id => {
    const { bookmarks, setBookmark, removeBookmark } = this.props;
    if (bookmarks.includes(id)) {
      removeBookmark(id);
    } else {
      setBookmark(id);
    }
  };

  togglePreviousBrew = id => {
    const { previousBrews, setPreviousBrew, removePreviousBrew } = this.props;
    if (previousBrews.includes(id)) {
      removePreviousBrew(id);
    } else {
      setPreviousBrew(id);
    }
  };

  render() {
    const { beer, type, bookmark, previous } = this.props;
    return (
      <div className='BeerCard' key={beer.id}>
        <header className='BeerCard__header'>
          {bookmark ? (
            <FaBookmark
              className='BeerCard__icon'
              onClick={() => this.handleSaveClick('bookmark')}
            />
          ) : (
            <FaRegBookmark
              className='BeerCard__icon'
              onClick={() => this.handleSaveClick('bookmark')}
            />
          )}
          {previous ? (
            <FaCheck
              className='BeerCard__icon'
              onClick={() => this.handleSaveClick('previous')}
            />
          ) : (
            <FaPlus
              className='BeerCard__icon'
              onClick={() => this.handleSaveClick('previous')}
            />
          )}
        </header>
        <h4 className='BeerCard__h4--name'>{beer.name}</h4>
        <p className='BeerCard__p--tagline'>{beer.tagline}</p>
        <Link to={`/${type}/${beer.id}`}>
          <button type='button' className='BeerCard__button--readMore'>
            Read More
          </button>
        </Link>
      </div>
    );
  }
}

export const mapStateToProps = ({ beers, bookmarks, previousBrews }) => ({
  beers,
  bookmarks,
  previousBrews
});

export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setBookmark,
      removeBookmark,
      setPreviousBrew,
      removePreviousBrew
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BeerCard);

BeerCard.propTypes = {
  beers: PropTypes.array,
  bookmarks: PropTypes.array,
  previousBrews: PropTypes.array,
  setBookmark: PropTypes.func,
  removeBookmark: PropTypes.func,
  setPreviousBrew: PropTypes.func,
  removePreviousBrew: PropTypes.func
};
