import { SHOW_ALL, SHOW_COMPLETED, SHOW_DOING } from './types';

const initialState = {
  filtered: 'all',
};

const filteredReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ALL:
      return state;
    case SHOW_COMPLETED:
      return state;
    case SHOW_DOING:
    default:
      return state;
  }
};

export default filteredReducer;
