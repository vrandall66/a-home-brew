import React from 'react';
import { shallow } from 'enzyme';
import ParentAccordion from './ParentAccordion';

describe('ParentAccordion', () => {
  let wrapper;
  let accordions = [{}, {}, {}];

  beforeEach(() => {
    wrapper = shallow(<ParentAccordion accordions={accordions} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
