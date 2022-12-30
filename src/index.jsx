import React from 'react';
import { createRoot } from 'react-dom/client';
import TodoList from './components/TodoList/TodoList.jsx';
import { Provider } from 'react-redux';
import store from "./redux/store.js";
import 'bootstrap/dist/css/bootstrap.css';
import './styles.scss';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <TodoList />
  </Provider>
)
