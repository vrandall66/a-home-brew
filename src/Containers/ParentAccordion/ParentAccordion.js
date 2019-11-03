import React, { Component } from 'react';
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
    const ingredients = accordions.map((accordion, index) => {
      return <li key={index}>{accordion}</li>;
    });
    return (
      <div className='Accordion__section'>
        <button className='Accordion' onClick={this.handleExpand}>
          <p className='Accordion__title'>{title}</p>
        </button>
        {this.state.isExpanded && (
          <div className='Accordion__content'>
            <ul>{ingredients}</ul>
          </div>
        )}
      </div>
    );
  }
}

export default ParentAccordion;
