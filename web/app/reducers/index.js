import { combineReducers } from 'redux';

import suggestion from '../reducers/suggestion'
import wishList from '../reducers/wish-list'

const rootReducer = combineReducers({
  suggestion,
  wishList
});

export default rootReducer;