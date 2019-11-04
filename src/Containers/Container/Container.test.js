import React from 'react';
import { shallow } from 'enzyme';
import Container from './Container';

describe('Container', () => {
  let wrapper;
  let type = 'previously_brewed';
  let beers = [{id: 1}, {id: 2}, {id: 3}];
  let bookmarks = [1, 2, 3];
  let previous = [4, 5, 6];

  beforeEach(() => {
    wrapper = shallow(
      <Container
        beers={beers}
        bookmarks={bookmarks}
        previous={previous}
        type={type}
      />
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
