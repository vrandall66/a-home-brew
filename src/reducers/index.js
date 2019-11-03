import { combineReducers } from 'redux';
import { beers } from './beers';
import { setLoading } from './setLoading';
import { bookmarks } from './bookmarks';
import { previousBrews } from './previousBrews';
import { currentBrews } from './currentBrews';
import { searchResults } from './searchResults';

const rootReducer = combineReducers({
  beers,
  setLoading,
  bookmarks,
  previousBrews,
  currentBrews,
  searchResults
});

export default rootReducer;
