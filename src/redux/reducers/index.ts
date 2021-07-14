import { combineReducers } from 'redux';
import startshipReducer from './startships_reducer';

const allReducers = {
  startship: startshipReducer
}

const rootReducer = combineReducers(allReducers);

export default rootReducer;