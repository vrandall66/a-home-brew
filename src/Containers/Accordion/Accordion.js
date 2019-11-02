import React, { Component } from 'react';
import dompurify from 'dompurify';
import './Accordion.scss';

export class Accordion extends Component {
  componentDidMount = () => {
    const clean = dompurify.sanitize;
    console.log(content);
  };
  render() {
    return (
      <div className='Accordion__section'>
        <button className='Accordion'>
          <p className='Accordion__title'>{title}</p>
        </button>
        <div className='Accordion__content'>
          <div
            className='Accordion__text'
            dangerouslySetInnerHTML={{
              __html: clean({ content })
            }}
          />
        </div>
      </div>
    );
  }
}

export default Accordion;
