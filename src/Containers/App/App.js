import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { Container } from '../Container/Container';
import { getPage1Beers, getBeerByName } from '../../apiCalls/apiCalls';
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
        <Route path='/beers' render={() => <Container beers={beers} />} />
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
      getBeerByName
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
