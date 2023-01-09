import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import TodoList from './components/TodoList/TodoList.jsx';
import store from './store/store.js';
import 'bootstrap/dist/css/bootstrap.css';
import './styles.scss';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <TodoList />
  </Provider>,
);
