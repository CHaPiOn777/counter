import React from "react";
import styles from "./App.module.css";
import { UseTypedSelector } from "../../hooks/UseTypedSelector";
import { useDispatch } from "react-redux";
import {
  decrementAction,
  incrementAction,
} from "../../services/actions/actions";

const App = () => {
  const { count } = UseTypedSelector((state) => state.increment);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Counter</h1>
      <div className={styles.countContainer}>
        <button
          className={styles.button}
          onClick={() => dispatch(decrementAction())}
        >
          -
        </button>
        <p className={styles.description}>
          count is <span className={styles.span}>{count}</span>
        </p>
        <button
          className={styles.button}
          onClick={() => dispatch(incrementAction())}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default App;
