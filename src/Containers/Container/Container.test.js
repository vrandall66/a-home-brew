import React from 'react';
import { shallow } from 'enzyme';
// import { setLoading, setError } from '../../actions';
import { Container, mapStateToProps } from './Container';

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

  it.skip('should get bookmarked status', () => {
    let id = 2;
    const results = wrapper.getBookmarkStatus(id);

    expect(results).toEqual(true);
  });
});

describe('mapStateToProps', () => {
  it('should return an object with beers, bookmarks and previous arrays', () => {
    const mockStoreState = {
      beers: [{}, {}, {}],
      bookmarks: [1, 2],
      previousBrews: [5]
    };

    const expected = {
      beers: [{}, {}, {}],
      bookmarks: [1, 2],
      previousBrews: [5]
    };

    const mappedProps = mapStateToProps(mockStoreState);

    expect(mappedProps).toEqual(expected);
  });
});

// describe('mapDispatchToProps', () => {
//   it('should call dispatch with setError', () => {
//     const mockDispatch = jest.fn();
//     const actionToDispatch = setError('Error');

//     const mappedProps = mapDispatchToProps(mockDispatch);
//     mappedProps.setError('Error');

//     expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
//   });

//   it('should call dispatch with setLoading', () => {
//     const mockDispatch = jest.fn();
//     const actionToDispatch = setLoading(true);

//     const mappedProps = mapDispatchToProps(mockDispatch);
//     mappedProps.setLoading(true);

//     expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
//   });
// });
