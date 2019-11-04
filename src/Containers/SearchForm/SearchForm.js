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
    this.clearInputs();
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
          <div className='SearchForm__div--container'>
            <input
              name='searchTerm'
              value={this.state.searchTerm}
              onChange={this.handleChange}
              placeholder='Search by name or description'
              className='SearchForm__input--search-term'
            ></input>
            <section className='SearchForm__section--select-container'>
              <section>
                <label htmlFor='hops' className='SearchForm__label'>
                  Hops:{' '}
                </label>
                <select
                  id='hops'
                  onChange={e => this.setState({ hops: e.target.value })}
                  value={this.state.hops ? this.state.hops : 'All'}
                  className='SearchForm__select'
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
                <label htmlFor='malt' className='SearchForm__label'>
                  Malt:{' '}
                </label>
                <select
                  id='malt'
                  onChange={e => this.setState({ malt: e.target.value })}
                  value={this.state.malt ? this.state.malt : 'All'}
                  className='SearchForm__select'
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
                <label htmlFor='yeast' className='SearchForm__label'>
                  Yeast:{' '}
                </label>
                <select
                  id='yeast'
                  onChange={e => this.setState({ yeast: e.target.value })}
                  value={this.state.yeast ? this.state.yeast : 'All'}
                  className='SearchForm__select'
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
            </section>
            <button
              type='button'
              className='SearchForm__button--search'
              onClick={this.handleClick}
            >
              Search
            </button>
          </div>
        </form>
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
