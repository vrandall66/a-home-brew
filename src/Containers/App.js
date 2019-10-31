import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPage1Beers, getBeerByName } from '../apiCalls/apiCalls';
import { setBeers } from '../actions/index';
import './App.css';
import { bindActionCreators } from 'redux';

export class App extends Component {
  componentDidMount = async () => {
    const { setBeers } = this.props;
    try {
      let beerData = await getPage1Beers();
      setBeers(beerData);
      console.log('1', beerData);
    } catch ({ message }) {
      console.log(message);
    }
  };

  render() {
    return <div className='App'></div>;
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
