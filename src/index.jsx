import React from 'react';
import { createRoot } from 'react-dom/client';
import TodoList from './components/TodoList/TodoList.jsx';
import { Provider } from 'react-redux';
import store from "./store/store.js";
//import store from './store_redux/store.js';
import 'bootstrap/dist/css/bootstrap.css';
import './styles.scss';
import Counter from './store_redux/Counter.jsx';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <TodoList />
  </Provider>
)
