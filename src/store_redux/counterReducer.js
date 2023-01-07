/* eslint-disable default-param-last */
import {
  DECREMENT, INCREMENT, RESET, INCREMENT_SOME,
} from './types';

const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case INCREMENT_SOME:
      return { ...state, count: state.count + action.payload };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case RESET:
      return { ...state, count: 0 };
    default:
      return state;
  }
};

export default counterReducer;
