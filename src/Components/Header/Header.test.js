import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import SearchForm from '../../Containers/SearchForm/SearchForm';

describe('Header', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
