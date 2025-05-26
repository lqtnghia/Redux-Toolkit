import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../slices/counter/counterSlice"; // Đổi từ features thành slices

const Counter: React.FC = () => {
  const count = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
    </div>
  );
};

export default Counter;
