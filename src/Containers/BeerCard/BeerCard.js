import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
// import { FaBookmark } from 'react-icons/fa';
import { FaRegBookmark } from 'react-icons/fa';
import { IoIosBeer } from 'react-icons/io';
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
      // case 'current':
      //   toggleCurrentBrew(id);
      //   break;
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
    const { beer, type } = this.props;
    // const { beer, type, bookmarks, previousBrews } = this.props;
    // const isBookmarked = bookmarks.map(id => id === parseInt(beer.id));
    // const bookmarkImg = isBookmarked ? <FaBookmark /> : <FaRegBookmark />;
    // const bookmarkClass = isBookmarked ? 'bookmarked' : '';
    // console.log('anything?', isBookmarked);
    return (
      <div className='BeerCard' key={beer.id}>
        <header className='BeerCard__header'>
          <FaRegBookmark onClick={() => this.handleSaveClick('bookmark')} />
          <IoIosBeer onClick={() => this.handleSaveClick('previous')} />
          {/* <input
            type='image'
            src='images/Current.png'
            onClick={() => this.handleSaveClick('current')}
          /> */}
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
