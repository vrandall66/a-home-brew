import { combineReducers } from 'redux';
import { beers } from './beers';
import { setLoading } from './setLoading';
import { bookmarks } from './bookmarks';

const rootReducer = combineReducers({
  beers,
  setLoading,
  bookmarks
});

export default rootReducer;
