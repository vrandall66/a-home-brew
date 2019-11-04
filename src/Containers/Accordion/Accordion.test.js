import React from 'react';
import { shallow } from 'enzyme';
import Accordion from './Accordion';

describe('Accordion', () => {
  let wrapper;
  let hop = {
    title: 'Fuggles',
    amount: {
      value: 25,
      unit: 'grams'
    },
    add: 'start',
    attribute: 'bitter',
    listItems: [`Attribute: Fuggles`, `When to add it: start`, `25 grams`]
  };
  let index = 1

  beforeEach(() => {
    wrapper = shallow(
      <Accordion title={hop.title} items={hop.listItems} key={index} />
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
});
