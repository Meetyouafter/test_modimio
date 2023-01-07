import { composeWithDevTools } from '@redux-devtools/extension';
import { createStore } from 'redux';
import todoReducer from './todoReducer';

const store = createStore(todoReducer, composeWithDevTools());

export default store;
