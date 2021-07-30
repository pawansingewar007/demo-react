import React, { useState } from "react";
import { useSelector } from "react-redux";
import { store } from "./../../store/store";
import { ClassComponent } from "..";
const HomeComponent = () => {
  const [showClassComponent, setShowClassComponent] = useState(true);
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

      {React.createElement(
        "button",
        {
          id: "login-btn",
          onClick: () => setShowClassComponent(false),
        },
        "changeState"
      )}
      <br />
      <br />
      {showClassComponent && <ClassComponent />}
    </>
  );
};

export default HomeComponent;
