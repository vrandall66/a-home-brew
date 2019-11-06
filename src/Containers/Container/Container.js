import React, { Component } from 'react';
import BeerCard from '../BeerCard/BeerCard';
import { bindActionCreators } from 'redux';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { setLoading, setError } from '../../actions';
import loading from '../../images/beer-pour.gif';
import './Container.scss';

export class Container extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  renderBeersFromList = list => {
    const { beers } = this.props;
    let renderable = beers.reduce((selectedBeers, beer) => {
      if (list.includes(beer.id)) {
        selectedBeers.push(beer);
      }
      return selectedBeers;
    }, []);
    return renderable;
  };

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
    const { beers, list } = this.props;
    return beers.map(beer => {
      let bookmark = this.getBookmarkStatus(beer.id);
      let previous = this.getPreviouslyBrewedStatus(beer.id);
      return (
        <BeerCard
          key={beer.id}
          beer={beer}
          bookmark={bookmark}
          previous={previous}
        />
      );
    });
  };

  render() {
    const { beers, list, bookmarks, previousBrews, searchResults } = this.props;
    return (
      <div className='Container'>
        {beers.length ? (
          this.renderBeersFromList(list)
        ) : (
          <img
            src={loading}
            className='Container__gif--loading'
            alt='Loading'
          />
        )}
      </div>
    );
  }
}

export const mapStateToProps = ({
  beers,
  bookmarks,
  previousBrews,
  searchResults
}) => ({
  beers,
  bookmarks,
  previousBrews,
  searchResults
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
