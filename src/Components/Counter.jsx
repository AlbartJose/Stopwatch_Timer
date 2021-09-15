import { CountTimer } from "./Timer";
import { Stopwatch } from "./Stopwatch";
import { useState, React } from "react";
import "./CounterStyle.css";

export const Counter = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <div className="mainB1">
        <div
          onClick={() => {
            setToggle(true);
          }}
          className="b1b1"
          style={
            toggle
              ? { backgroundColor: "gainsboro" }
              : { backgroundColor: "inherit" }
          }
        >
          Stopwatch
        </div>
        <div
          onClick={() => {
            setToggle(false);
          }}
          className="b1b1"
          style={
            toggle
              ? { backgroundColor: "inherit" }
              : { backgroundColor: "gainsboro" }
          }
        >
          Timer
        </div>
      </div>
      <div style={toggle ? { display: "block" } : { display: "none" }}>
        <Stopwatch />
      </div>
      <div style={!toggle ? { display: "block" } : { display: "none" }}>
        <CountTimer />
      </div>
    </>
  );
};
