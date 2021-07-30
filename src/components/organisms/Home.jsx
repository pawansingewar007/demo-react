import React from "react";
import { useSelector } from "react-redux";
import { store } from "./../../store/store";
const HomeComponent = () => {
  const counter = useSelector((state) => state.counter);
  return (
    <>
      <div>Rendering Home {counter}</div>
      <button
        onClick={() => store.dispatch({ type: "INCREMENT", payload: null })}
      >
        INCREMENT
      </button>
      <button
        onClick={() => store.dispatch({ type: "DECREMENT", payload: null })}
      >
        DECREMENT
      </button>
    </>
  );
};

export default HomeComponent;
