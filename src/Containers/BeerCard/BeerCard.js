import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { FaRegBookmark } from 'react-icons/fa';
// import { IoIosBeer } from 'react-icons/io';
import { removeBookmark, setBookmark } from '../../actions';
import './BeerCard.scss';

export class BeerCard extends Component {
  constructor() {
    super();
    this.state = {
      bookmarked: false,
      previous: false,
      current: false
    };
  }
  handleSaveClick = list => {
    const { id } = this.props.beer;
    switch (list) {
      case 'bookmark':
        this.toggleBookmark(id);
        break;
      // case 'previous':
      //   togglePreviousBrew(id);
      //   break;
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

  render() {
    const { beer, type } = this.props;
    return (
      <div className='BeerCard' key={beer.id}>
        <header className='BeerCard__header'>
          <FaRegBookmark onClick={() => this.handleSaveClick('bookmark')} />
          {/* <IoIosBeer onClick={() => this.handleSaveClick('previous')} />
          <input
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

export const mapStateToProps = ({ beers, bookmarks }) => ({
  beers,
  bookmarks
});

export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setBookmark,
      removeBookmark
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BeerCard);
