import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchResults } from '../../actions';
import { bindActionCreators } from 'redux';
import './SearchForm.scss';

export class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: '',
      by_name: '',
      hops: '',
      malt: '',
      yeast: ''
    };
  }

  // if something in local state,

  // dropdown menu for name, hops, malt, yeast
  // run value of search

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  getHopsOptions = () => {
    const { beers } = this.props;
    return beers.reduce((filtered, beer) => {
      beer.ingredients.hops.forEach(i => {
        if (!filtered.includes(i.name)) {
          filtered.push(i.name);
        }
      });
      return filtered;
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
      return filtered;
    }, []);
  };

  getYeastOptions = () => {
    const { beers } = this.props;
    return beers.reduce((filtered, beer) => {
      if (!filtered.includes(beer.ingredients.yeast)) {
        filtered.push(beer.ingredients.yeast);
      }
      return filtered;
    }, []);
  };

  handleSubmit = async () => {
    const { setSearchResults } = this.props;
    const { hops, malt, yeast } = this.state;
    const baseUrl = 'https://api.punkapi.com/v2/beers?';
    const hopsQuery = this.state.hops ? `hops=${hops}&` : '';
    const maltQuery = this.state.malt ? `malt=${malt}&` : '';
    const yeastQuery = this.state.yeast ? `yeast=${yeast}&` : '';
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

    // filter to which have name/description from input
    // if this.state.searchTerm
    // filter by name/description, not hops/malts/yeast
    // Compare against name and description
  };

  // ideally a good idea to not make apiCalls outside of files
  // find a way to filter results from original fetch
  // above isn't ideal, but I wanted to practice api Queries

  // Could refactor to filter manually on data collected in first API call
  // Make an issue on GH about wanting to practice queries, but to improve app - filter data

  render() {
    return (
      <form className='SearchForm'>
        <input
          name='searchTerm'
          value={this.state.searchTerm}
          onChange={this.handleChange}
          placeholder='Search by name or description'
          className='SearchForm__input--search-term'
        ></input>
        <label htmlFor='hops'>Hops:</label>
        <select
          id='hops'
          onChange={e => this.setState({ hops: e.target.value })}
        >
          <option value=''>All</option>
          {this.getHopsOptions().map((hops, index) => {
            return (
              <option value={hops} key={index}>
                {hops}
              </option>
            );
          })}
        </select>
        <label htmlFor='malt'>Malt:</label>
        <select
          id='malt'
          onChange={e => this.setState({ malt: e.target.value })}
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
        <label htmlFor='yeast'>Yeast:</label>
        <select
          id='yeast'
          onChange={e => this.setState({ yeast: e.target.value })}
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
        <button type='button' onClick={() => this.handleSubmit()}>
          Search
        </button>
      </form>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm);
