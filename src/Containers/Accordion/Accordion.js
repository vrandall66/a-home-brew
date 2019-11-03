import React, { Component } from 'react';
// import dompurify from 'dompurify';

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
  }

  render() {
    const { title, items } = this.props;
    const listItems = items.map(item => {
      return <li>{item}</li>;
    });
    return (
      <div className='Accordion__section'>
        <button className='Accordion' onClick={this.handleExpand}>
          <p className='Accordion__title'>{title}</p>
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
