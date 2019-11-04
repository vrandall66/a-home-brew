import React, { Component } from 'react';
import { IoIosArrowDropdown, IoIosArrowDropdownCircle } from 'react-icons/io';
import { PropTypes } from 'prop-types';
import './ParentAccordion.scss';

export class ParentAccordion extends Component {
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
    const { title, accordions } = this.props;
    const { isExpanded } = this.state;
    const ingredients = accordions.map((accordion, index) => {
      return <li key={index}>{accordion}</li>;
    });
    return (
      <div className='Accordion__section'>
        <button className='Accordion' onClick={this.handleExpand}>
          <p className='Accordion__title'>{title}</p>
          {isExpanded ? (
            <IoIosArrowDropdownCircle className='Accordion__icon' />
          ) : (
            <IoIosArrowDropdown className='Accordion__icon' />
          )}
        </button>
        {isExpanded && (
          <div className='Accordion__content'>
            <ul>{ingredients}</ul>
          </div>
        )}
      </div>
    );
  }
}

export default ParentAccordion;

ParentAccordion.propTypes = {
  title: PropTypes.string,
  accordions: PropTypes.array
};
