import React, { Component } from 'react';
import { IoIosArrowDropdown, IoIosArrowDropdownCircle } from 'react-icons/io';
import { PropTypes } from 'prop-types';
import './Accordion.scss';

export class Accordion extends Component {
  constructor() {
    super();
    this.state = {
      isExpanded: false
    };
  }

  handleExpand = () => {
    this.setState({ isExpanded: !this.state.isExpanded });
  };

  render() {
    const { title, items } = this.props;
    const listItems = items.map((item, index) => {
      return (
        <li key={index} className='Accordion__text'>
          {item}
        </li>
      );
    });
    return (
      <div className='Accordion__section'>
        <button className='Accordion' onClick={this.handleExpand}>
          <p className='Accordion__title'>{title}</p>
          {this.state.isExpanded ? (
            <IoIosArrowDropdownCircle className='Accordion__icon' />
          ) : (
            <IoIosArrowDropdown className='Accordion__icon' />
          )}
        </button>
        {this.state.isExpanded && (
          <div className='Accordion__content'>
            <ul>{listItems}</ul>
          </div>
        )}
      </div>
    );
  }
}

export default Accordion;

Accordion.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array
};
