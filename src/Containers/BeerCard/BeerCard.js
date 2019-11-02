import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { FaRegBookmark } from 'react-icons/fa';
import { IoIosBeer } from 'react-icons/io';
import {
  toggleBookmark,
  setBookmark,
  removeBookmark,
  addPreviousBrew
} from '../../actions';
import './BeerCard.scss';

export class BeerCard extends Component {
  constructor() {
    super();
    this.state = {
      bookmarked: false,
      current: false,
      previous: false
    };
  }

  handleBookmarkClick = e => {
    const { beer, beers } = this.props;
    let foundBeer = beers.find(brew => {
      return brew.id === beer.id;
    });
    let bookmarked = (foundBeer.bookmarked = true);
    return bookmarked
      ? this.handleAddBookmark(beer)
      : this.handleRemoveBookmark;
  };

  handleAddBookmark = beer => {
    const { toggleBookmark, setBookmark, bookmarks } = this.props;
    toggleBookmark(beer);
    let found = bookmarks.find(brew => {
      return beer.id === brew.id;
    });
    found ? this.handleRemoveBookmark(beer) : setBookmark(beer);
  };

  handleRemoveBookmark = beer => {
    const { bookmarks, removeBookmark } = this.props;
    let foundBeer = bookmarks.find(brew => {
      return brew.id === beer.id;
    });
    let unBookmarked = (foundBeer.bookmarked = false);
    removeBookmark(unBookmarked);
    console.log('below remove');
  };

  handlePreviousBrewClick = e => {
    const { beer, beers, addPreviousBrew } = this.props;
    console.log(beer);
    let foundBeer = beers.find(brew => {
      return brew.id === beer.id;
    });
    let previousBrew = (foundBeer.previous = true);
    return previousBrew ? addPreviousBrew(beer) : null;
  };

  render() {
    const { beer, type } = this.props;
    return (
      <div className='BeerCard' key={beer.id}>
        <header className='BeerCard__header'>
          <FaRegBookmark onClick={this.handleBookmarkClick} />
          <IoIosBeer onClick={this.handlePreviousBrewClick} />
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

export const mapStateToProps = ({ beers, bookmarks }) => ({
  beers,
  bookmarks
});

export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { toggleBookmark, setBookmark, removeBookmark, addPreviousBrew },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BeerCard);
