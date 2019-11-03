import React, { Component } from 'react';
// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import './SearchForm.scss';
import { getBeerByName } from '../../apiCalls/apiCalls';

export class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: ''
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = name => {
    switch (name) {
      case 'name':
        return getBeerByName(name.value);
      default:
        return 'Unable to search right now';
    }
  };

  render() {
    const { name } = this.props;
    return (
      <form className='SearchForm'>
        <input
          name='searchTerm'
          value={this.state.searchTerm}
          onChange={this.handleChange}
          placeholder='Search'
          className='SearchForm__input--search-term'
        ></input>
        <button type='button' onSubmit={() => this.handleSubmit(name)}>
          Search
        </button>
      </form>
    );
  }
}

// export const mapStateToProps = ({ name }) => ({
//   name
// })

// export const mapDispatchToProps = dispatch => {
//   return (
//     bindActionCreators({}, dispatch)
//   )
// }

export default SearchForm;
