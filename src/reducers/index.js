import { combineReducers } from 'redux'
import { beers } from './beers';
import { setLoading } from './setLoading';
import { favorites } from './favorites'

const rootReducer = combineReducers({
  beers,
  setLoading,
  favorites
})

export default rootReducer;