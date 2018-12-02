import { combineReducers } from 'redux';
import homeReducer from './modules/home/containers/home-reducers';

const rootReducer = combineReducers({
  home: homeReducer,
});

export default rootReducer;
