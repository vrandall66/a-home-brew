import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { Nav } from '../Nav/Nav';
import { Header } from '../../Components/Header/Header';
import { Container } from '../Container/Container';
import { BeerPage } from '../BeerPage/BeerPage';
import { getExampleBeers } from '../../apiCalls/apiCalls';
import { setBeers, addProperties } from '../../actions/index';
import './App.scss';
import { bindActionCreators } from 'redux';

export class App extends Component {
  componentDidMount = async () => {
    try {
      let beerData = await getExampleBeers();
      this.updateDataFromFetch(beerData);
    } catch ({ message }) {
      console.log(message);
    }
  };

  updateDataFromFetch = beerData => {
    let newBeerData = beerData.map(beer => {
      const {
        id,
        name,
        tagline,
        first_brewed,
        description,
        abv,
        ibu,
        target_fg,
        target_og,
        ebc,
        srm,
        ph,
        attenuation_level,
        volume,
        boil_volume,
        method,
        ingredients,
        food_pairing,
        brewers_tips
      } = beer;
      return {
        id,
        name,
        tagline,
        first_brewed,
        description,
        abv,
        ibu,
        target_fg,
        target_og,
        ebc,
        srm,
        ph,
        attenuation_level,
        volume,
        boil_volume,
        method,
        ingredients,
        food_pairing,
        brewers_tips,
        bookmarked: false,
        current: false,
        previous: false
      };
    });
    console.log('newData', newBeerData);
    return this.markBookmarks(newBeerData);
  };

  markBookmarks = newBeerData => {
    const { setBeers, bookmarks } = this.props;
    let bookmarked = newBeerData.map(beer => {
      return bookmarks.find(brew => brew.id === beer.id)
        ? { ...beer, bookmarked: true }
        : { ...beer, bookmarked: false };
    });
    console.log('booked', bookmarked);
    return setBeers(bookmarked);
  };

  render() {
    const { beers } = this.props;
    return (
      <div className='App'>
        <Nav />
        <Header />
        <Route exact path='/' render={() => <Container beers={beers} />} />
        <Route
          exact
          path='/beers/:id'
          render={({ match }) => {
            const beerDetails = beers.find(
              beer => beer.id === parseInt(match.params.id)
            );
            return <BeerPage beerDetails={beerDetails} />;
          }}
        />
      </div>
    );
  }
}

export const mapStateToProps = ({ beers, bookmarks }) => ({
  beers,
  bookmarks
});

export const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      setBeers,
      addProperties
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
