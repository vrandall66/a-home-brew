import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import './SearchForm.scss'

export class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: ''
    }
  }

  handleChange = e => {
    this.setState({ currentValue: e.target.value });
  }

  render() {
    { name } = this.props;
    return (
      <form className="SearchForm">
        <input className="SearchForm__input--search-term"></input>
        <button type="button">Search</button>
      </form>
    )
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