import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { Container } from '../Container/Container';
import { BeerPage } from '../BeerPage/BeerPage';
import { getPage1Beers } from '../../apiCalls/apiCalls';
import { setBeers } from '../../actions/index';
import './App.css';
import { bindActionCreators } from 'redux';

export class App extends Component {
  componentDidMount = async () => {
    const { setBeers } = this.props;
    try {
      let beerData = await getPage1Beers();
      setBeers(beerData);
    } catch ({ message }) {
      console.log(message);
    }
  };

  render() {
    const { beers } = this.props;
    return (
      <div className='App'>
        <Route exact path='/beers' render={() => <Container beers={beers} />} />
        <Route
          exact
          path='/beers/:id'
          render={({ match }) => {
            const beerDetails = beers.find(
              beer => beer.id === parseInt(match.params.id)
            );
            return <BeerPage beerDetails={beerDetails} match={match} />;
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
      setBeers
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
