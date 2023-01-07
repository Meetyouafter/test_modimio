/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCustomerAction, removeCustomerAction } from './customerReducer';
import {
  DECREMENT, INCREMENT, RESET, INCREMENT_SOME,
} from './types';

function Counter() {
  const [custom, setCustom] = useState('');

  const count = useSelector((state) => state.count.count);
  const customers = useSelector((state) => state.customers.customers);
  const dispatch = useDispatch();

  const increment = () => dispatch({ type: INCREMENT });
  const incrementSome = (value) => dispatch({ type: INCREMENT_SOME, payload: value });
  const decrement = () => dispatch({ type: DECREMENT });
  const reset = () => dispatch({ type: RESET });

  const addCustomer = (data) => {
    const newCustomer = {
      id: Date.now(),
      name: data,
    };
    dispatch(addCustomerAction(newCustomer));
  };

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id));
  };

  return (
    <>
      <div>
        <span>
          Count is
          {count}
        </span>
        <button type="submit" onClick={() => increment()}>Increment</button>
        <button type="submit" onClick={() => incrementSome(Number(prompt()))}>Increment Some</button>
        <button type="submit" onClick={() => decrement()}>Decrement</button>
        <button type="submit" onClick={() => reset()}>Reset</button>
      </div>

      <div>
        {customers.map((customer) => (
          <div onClick={() => removeCustomer(customer)}>
            {customer.name}
          </div>
        ))}
        <input placeholder="add name" value={custom} onChange={(e) => setCustom(e.target.value)} />
        <button type="submit" onClick={() => addCustomer(custom)}>Add new customer</button>
      </div>
    </>
  );
}

export default Counter;
