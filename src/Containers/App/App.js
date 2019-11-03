import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { Nav } from '../Nav/Nav';
import { Header } from '../../Components/Header/Header';
import { Container } from '../Container/Container';
import { BeerPage } from '../BeerPage/BeerPage';
import { SearchForm } from '../SearchForm/SearchForm';
import { getExampleBeers } from '../../apiCalls/apiCalls';
import { setBeers } from '../../actions/index';
import './App.scss';
import { bindActionCreators } from 'redux';

export class App extends Component {
  componentDidMount = async () => {
    const { setBeers } = this.props;
    try {
      let beerData = await getExampleBeers();
      setBeers(beerData);
    } catch ({ message }) {
      console.log(message);
    }
  };

  render() {
    const { beers, bookmarks, getBeersByName } = this.props;
    return (
      <div className='App'>
        <Nav />
        <Header />
        {/* {beers ? ( */}
          <>
            <Route exact path='/' render={() => <Container beers={beers} type={'beers'} />} />
            <Route
              exact path='/bookmarked'
              render={() => <Container beers={bookmarks} type={'bookmarked'} />}
            />
            <Route
              exact path='/beers/:id'
              render={({ match }) => {
                const beerDetails = beers.find(
                  beer => beer.id === parseInt(match.params.id)
                );
                return <BeerPage beerDetails={beerDetails} />;
              }}
            />
          </>
        {/* ) : (
          null
        )} */}
      </div>
    );
  };
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
