import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { Nav } from '../Nav/Nav';
import { Container } from '../Container/Container';
import { BeerPage } from '../BeerPage/BeerPage';
import { getPage1Beers } from '../../apiCalls/apiCalls';
import { setBeers, addProperties } from '../../actions/index';
import './App.css';
import { bindActionCreators } from 'redux';

export class App extends Component {
  componentDidMount = async () => {
    try {
      let beerData = await getPage1Beers();
      this.updateDataFromFetch(beerData);
    } catch ({ message }) {
      console.log(message);
    }
  };

  updateDataFromFetch = beerData => {
    const { setBeers } = this.props;
    let newData = beerData.map(beer => {
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

    setBeers(newData);
  };

  render() {
    const { beers } = this.props;
    return (
      <div className='App'>
        <Nav />
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

export const mapStateToProps = ({ beers }) => ({
  beers
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
