import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { setSearchResults } from '../../actions';
import { bindActionCreators } from 'redux';
import { PropTypes } from 'prop-types';
import './SearchForm.scss';

export class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: '',
      hops: '',
      malt: '',
      yeast: ''
    };
  }

  getHopsOptions = () => {
    const { beers } = this.props;
    return beers.reduce((filtered, beer) => {
      beer.ingredients.hops.forEach(i => {
        if (!filtered.includes(i.name)) {
          filtered.push(i.name);
        }
      });
      return filtered.sort();
    }, []);
  };

  getMaltOptions = () => {
    const { beers } = this.props;
    return beers.reduce((filtered, beer) => {
      beer.ingredients.malt.forEach(i => {
        if (!filtered.includes(i.name)) {
          filtered.push(i.name);
        }
      });
      return filtered.sort();
    }, []);
  };

  getYeastOptions = () => {
    const { beers } = this.props;
    return beers.reduce((filtered, beer) => {
      if (!filtered.includes(beer.ingredients.yeast)) {
        filtered.push(beer.ingredients.yeast);
      }
      return filtered.sort();
    }, []);
  };

  searchByHopsMaltOrYeast = async () => {
    const { setSearchResults } = this.props;
    const { hops, malt, yeast } = this.state;
    const baseUrl = 'https://api.punkapi.com/v2/beers?';
    const hopsQuery = hops ? `hops=${hops}&` : '';
    const maltQuery = malt ? `malt=${malt}&` : '';
    const yeastQuery = yeast ? `yeast=${yeast}&` : '';
    const response = await fetch(
      `${baseUrl}${hopsQuery}${maltQuery}${yeastQuery}`
    );
    if (!response.ok) {
      throw new Error(
        'Could not retrieve beers, please explore with us later.'
      );
    }
    const data = await response.json();
    return await setSearchResults(data);
  };

  searchBySearchTerm = async () => {
    const { setSearchResults } = this.props;
    const { searchTerm } = this.state;
    const baseUrl = 'https://api.punkapi.com/v2/beers?';
    const termQuery = searchTerm ? `beer_name=${searchTerm}` : '';
    const response = await fetch(`${baseUrl}${termQuery}`);
    if (!response.ok) {
      throw new Error(
        'Could not retrieve beers, please explore with us later.'
      );
    }
    const data = await response.json();
    return await setSearchResults(data);
  };

  generateSearchResultText = () => {
    const { searchTerm, hops, malt, yeast } = this.state;
    let termSearch = searchTerm;
    let hopsSearch = hops;
    let maltSearch = malt;
    let yeastSearch = yeast;

    let searchResultText = (
      <h5>
        You searched for: {termSearch && termSearch} {hopsSearch && hopsSearch}{' '}
        {maltSearch && maltSearch} {yeastSearch && yeastSearch}
      </h5>
    );
    return searchResultText;
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.handleClick();
  };

  handleClick = () => {
    const { history } = this.props;
    const { hops, malt, yeast, searchTerm } = this.state;
    if (hops || malt || yeast) {
      this.searchByHopsMaltOrYeast();
    }
    if (searchTerm) {
      this.searchBySearchTerm();
    }
    // this.clearInputs();
    return history.push('/search');
  };

  clearInputs = () => {
    const stateKeys = Object.keys(this.state);
    stateKeys.forEach(stateKey =>
      this.setState({
        [stateKey]: ''
      })
    );
  };

  render() {
    return (
      <>
        <form className='SearchForm' onSubmit={e => this.handleSubmit(e)}>
          <input
            name='searchTerm'
            value={this.state.searchTerm}
            onChange={this.handleChange}
            placeholder='Search by name or description'
            className='SearchForm__input--search-term'
          ></input>
          <section>
            <label htmlFor='hops'>Hops:</label>
            <select
              id='hops'
              name='hops'
              onChange={e => this.setState({ hops: e.target.value })}
              value={this.state.hops ? this.state.hops : 'All'}
            >
              <option value='' id='all-hops'>
                All
              </option>
              {this.getHopsOptions().map((hops, index) => {
                return (
                  <option value={hops} key={index}>
                    {hops}
                  </option>
                );
              })}
            </select>
          </section>
          <section>
            <label htmlFor='malt'>Malt:</label>
            <select
              id='malt'
              onChange={e => this.setState({ malt: e.target.value })}
              value={this.state.malt ? this.state.malt : 'All'}
            >
              <option value=''>All</option>
              {this.getMaltOptions().map((malt, index) => {
                return (
                  <option value={malt} key={index}>
                    {malt}
                  </option>
                );
              })}
            </select>
          </section>
          <section>
            <label htmlFor='yeast'>Yeast:</label>
            <select
              id='yeast'
              onChange={e => this.setState({ yeast: e.target.value })}
              value={this.state.yeast ? this.state.yeast : 'All'}
            >
              <option value=''>All</option>
              {this.getYeastOptions().map((yeast, index) => {
                return (
                  <option value={yeast} key={index}>
                    {yeast}
                  </option>
                );
              })}
            </select>
          </section>
          <button type='button' onClick={this.handleClick}>
            Search
          </button>
        </form>
        {this.generateSearchResultText()}
      </>
    );
  }
}

export const mapStateToProps = ({ beers, searchResults }) => ({
  beers,
  searchResults
});

export const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setSearchResults }, dispatch);
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SearchForm)
);

SearchForm.propTypes = {
  beers: PropTypes.array,
  searchResults: PropTypes.array,
  setSearchResults: PropTypes.func
};
