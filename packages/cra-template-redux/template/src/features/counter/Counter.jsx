import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { decrement, increment, incrementAsync, incrementByAmount, incrementIfOdd, selectCount, selectStatus, } from "./counterSlice";

export const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector(selectCount);
    const status = useSelector(selectStatus);
    const [incrementAmount, setIncrementAmount] = useState(2);

    return (<div>
      <div className={styles.row}>
        <button className={styles.button} aria-label="Decrement value" onClick={() => dispatch(decrement())}>
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button className={styles.button} aria-label="Increment value" onClick={() => dispatch(increment())}>
          +
        </button>
      </div>
      <div className={styles.row}>
        <input className={styles.textbox} aria-label="Set increment amount" value={incrementAmount} onChange={e => setIncrementAmount(Number(e.target.value))}/>
        <button className={styles.button} onClick={() => dispatch(incrementByAmount(incrementAmount))}>
          Add Amount
        </button>
        <button className={styles.asyncButton} disabled={status !== "idle"} onClick={() => dispatch(incrementAsync(incrementAmount))}>
          Add Async
        </button>
        <button className={styles.button} onClick={() => dispatch(incrementIfOdd(incrementAmount))}>
          Add If Odd
        </button>
      </div>
    </div>);
};
