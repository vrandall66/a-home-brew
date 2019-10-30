import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBeers } from '../apiCalls/apiCalls';
import './App.css';

export class App extends Component {
  componentDidMount = async () => {
    try {
      let beerData = await getBeers();
      console.log(beerData)
    } catch ({ message }) {
      console.log(message)
    }
  }

  render() {
    return <div className='App'>

    </div>;
  }
}

export default connect(null, null)(App);
