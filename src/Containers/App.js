import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBeers } from '../apiCalls/apiCalls';
import { setBeers } from '../actions/index';
import './App.css';
import { bindActionCreators } from '../../../../../../Library/Caches/typescript/3.6/node_modules/redux';

export class App extends Component {
  componentDidMount = async () => {
    const { setBeers } = this.props;
    try {
      let beerData = await getBeers();
      setBeers(beerData);
      console.log(beerData);
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
      setBeers
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
