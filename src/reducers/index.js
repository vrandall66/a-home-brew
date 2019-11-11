import { combineReducers } from 'redux';
import { beers } from './beers';
import { isLoading } from './isLoading';
import { hasError } from './error';
import { bookmarks } from './bookmarks';
import { previousBrews } from './previousBrews';
import { currentBrews } from './currentBrews';
import { searchResults } from './searchResults';

const rootReducer = combineReducers({
  beers,
  isLoading,
  hasError,
  bookmarks,
  previousBrews,
  currentBrews,
  searchResults
});

export default rootReducer;
