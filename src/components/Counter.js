import { useSelector, useDispatch } from "react-redux";
import { DECREMENT, INCREMENT } from "../redux/action";

import classes from "./Counter.module.css";

const Counter = () => {
  const counter = 0;
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={() => dispatch(INCREMENT())}>Increment</button>
        <button onClick={() => dispatch(DECREMENT())}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
