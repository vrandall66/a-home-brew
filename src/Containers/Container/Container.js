import React, { Component } from 'react';
import BeerCard from '../BeerCard/BeerCard';
import { bindActionCreators } from 'redux';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { setLoading, setError } from '../../actions';
import './Container.scss';

export class Container extends Component {
  getBookmarkStatus = id => {
    const { bookmarks } = this.props;
    let status = bookmarks.includes(id) ? true : false;
    return status;
  };

  getPreviouslyBrewedStatus = id => {
    const { previous } = this.props;
    let status = previous.includes(id) ? true : false;
    return status;
  };

  displayBeers = () => {
    const { beers, type } = this.props;
    return beers.map(beer => {
      let bookmark = this.getBookmarkStatus(beer.id);
      let previous = this.getPreviouslyBrewedStatus(beer.id);
      return (
        <BeerCard
          key={beer.id}
          beer={beer}
          type={type}
          bookmark={bookmark}
          previous={previous}
        />
      );
    });
  };

  render() {
    let beers = this.displayBeers();
    return <div className='Container'>{beers}</div>;
  }
}

export const mapStateToProps = ({ beers, bookmarks, previousBrews }) => ({
  beers,
  bookmarks,
  previousBrews
});

export const mapDispatchToProps = dispatch =>
  bindActionCreators({ setError, setLoading }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);

Container.propTypes = {
  beers: PropTypes.array,
  type: PropTypes.string,
  bookmarks: PropTypes.array,
  previous: PropTypes.array
};
