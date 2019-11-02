import { combineReducers } from 'redux';
import { beers } from './beers';
import { setLoading } from './setLoading';
import { bookmarks } from './bookmarks';
import { previousBrews } from './previousBrews';

const rootReducer = combineReducers({
  beers,
  setLoading,
  bookmarks,
  previousBrews
});

export default rootReducer;
