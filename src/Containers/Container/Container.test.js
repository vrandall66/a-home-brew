import React from 'react';
import { shallow } from 'enzyme';
import Container from './Container';

describe('Container', () => {
  let wrapper;
  let type = 'bookmarks';
  let beers = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 }
  ];
  let bookmarks = [1, 2];
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

  it('should get bookmarked status', () => {
    let id = 2;
    const results = wrapper.getBookmarkStatus(id)

    expect(results).toEqual(true)
  });
});
