import { combineReducers } from 'redux';
import resourceReducer from './resource.reducer';

const rootReducer = combineReducers({
  resource: resourceReducer
});

export default rootReducer;
