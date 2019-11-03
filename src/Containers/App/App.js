import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { Nav } from '../Nav/Nav';
import { Header } from '../../Components/Header/Header';
import { Container } from '../Container/Container';
import { BeerPage } from '../BeerPage/BeerPage';
import { getAllBeers } from '../../apiCalls/apiCalls';
import { setBeers } from '../../actions/index';
import './App.scss';
import { bindActionCreators } from 'redux';

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
    const { beers, bookmarks } = this.props;
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
                <Container beers={beers} type={'beers'} />
              </>
            )}
          />
          <Route
            exact
            path='/bookmarked'
            render={() => (
              <>
                <Nav />
                <Header />
                <Container
                  beers={this.renderBeersFromList(bookmarks)}
                  type={'bookmarked'}
                />
              </>
            )}
          />
          <Route
            exact
            path='/beers/by_name'
            render={() => (
              <>
                <Header />
                <Container beers={beers} type={'by_name'} />
              </>
            )}
          />
          <Route
            exact
            path='/(beers|bookmarked)/:id'
            render={({ match }) => {
              const beerDetails = beers.find(
                beer => beer.id === parseInt(match.params.id)
              );
              return (
                <>
                  <Header />
                  <BeerPage beerDetails={beerDetails} />
                </>
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}

export const mapStateToProps = ({ beers, bookmarks, previousBrews }) => ({
  beers,
  bookmarks,
  previousBrews
});

export const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setBeers }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
