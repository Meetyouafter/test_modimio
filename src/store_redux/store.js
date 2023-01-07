import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import counterReducer from './counterReducer';
import customerReducer from './customerReducer';

const rootReducer = combineReducers({
  count: counterReducer,
  customers: customerReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(),
);

export default store;
