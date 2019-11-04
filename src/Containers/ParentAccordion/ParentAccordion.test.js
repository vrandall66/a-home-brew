import React from 'react';
import { shallow } from 'enzyme';
import ParentAccordion from './ParentAccordion';

describe('ParentAccordion', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ParentAccordion />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
