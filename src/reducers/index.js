import { combineReducers } from 'redux';
import { beers } from './beers';
import { setLoading } from './setLoading';
import { bookmarks } from './bookmarks';
import { previousBrews } from './previousBrews';
import { currentBrews } from './currentBrews';

const rootReducer = combineReducers({
  beers,
  setLoading,
  bookmarks,
  previousBrews,
  currentBrews
});

export default rootReducer;
