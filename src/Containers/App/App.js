import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { Nav } from '../../Components/Nav/Nav';
import { Header } from '../../Components/Header/Header';
import { Container } from '../Container/Container';
import { BeerPage } from '../BeerPage/BeerPage';
import { getAllBeers } from '../../apiCalls/apiCalls';
import { setBeers } from '../../actions/index';
import { bindActionCreators } from 'redux';
import { PropTypes } from 'prop-types';
import './App.scss';

export class App extends Component {
  componentDidMount = async () => {
    const { setBeers } = this.props;
    try {
      let beerData = await getAllBeers([], 1);
      setBeers(beerData);
    } catch ({ message }) {
      console.log(message);
    }
  };

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

  render() {
    const { beers, bookmarks, previousBrews, searchResults } = this.props;
    return (
      <div className='App'>
        <Switch>
          <Route
            exact
            path='/'
            render={() => (
              <>
                <Header />
                <Nav />
                <Container
                  beers={beers}
                  type={'beers'}
                  bookmarks={bookmarks}
                  previous={previousBrews}
                />
              </>
            )}
          />
          <Route
            exact
            path='/bookmarked'
            render={() => (
              <>
                <Header />
                <Nav />
                <Container
                  beers={this.renderBeersFromList(bookmarks)}
                  type={'bookmarked'}
                  bookmarks={bookmarks}
                  previous={previousBrews}
                />
              </>
            )}
          />
          <Route
            exact
            path='/previously_brewed'
            render={() => (
              <>
                <Header />
                <Nav />
                <Container
                  beers={this.renderBeersFromList(previousBrews)}
                  type={'previously_brewed'}
                  bookmarks={bookmarks}
                  previous={previousBrews}
                />
              </>
            )}
          />
          <Route
            exact
            path='/(beers|bookmarked|previously_brewed|search)/:id'
            render={({ match }) => {
              const beerDetails = beers.find(
                beer => beer.id === parseInt(match.params.id)
              );
              return (
                <>
                  <Header />
                  <Nav />
                  <BeerPage beerDetails={beerDetails} />
                </>
              );
            }}
          />
          <Route
            exact
            path='/search'
            render={() => (
              <>
                <Header />
                <Nav />
                <Container
                  beers={searchResults}
                  type={'search'}
                  bookmarks={bookmarks}
                  previous={previousBrews}
                />
              </>
            )}
          />
        </Switch>
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

export const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setBeers }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

App.propTypes = {
  beers: PropTypes.array,
  bookmarks: PropTypes.array,
  previousBrews: PropTypes.array,
  searchResults: PropTypes.array,
  setBeers: PropTypes.func
};
