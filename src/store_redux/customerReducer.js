/* eslint-disable default-param-last */
import { ADD_CUSTOMER, REMOVE_CUSTOMER } from './types';

const initialState = {
  customers: [
    { id: 1, name: 'Bob' },
    { id: 2, name: 'Rob' },
  ],
};

const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CUSTOMER:
      return { ...state, customers: [...state.customers, action.payload] };
    case REMOVE_CUSTOMER:
      return {
        ...state,
        customers: state.customers.filter((customer) => customer.id !== action.payload),
      };
    default:
      return state;
  }
};

export const addCustomerAction = (payload) => ({ type: ADD_CUSTOMER, payload });
export const removeCustomerAction = (payload) => ({ type: REMOVE_CUSTOMER, payload });

export default customerReducer;
